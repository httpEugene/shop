import React, { PureComponent } from 'react';
import { View } from 'react-native';
import FBSDK from 'react-native-fbsdk';
import PropTypes from 'prop-types';
import styles from './styles';

const {
  LoginButton,
  AccessToken,
} = FBSDK;

const permissions = ['publish_actions'];

export default class LoginForm extends PureComponent {
  static propTypes = {
    onLogin: PropTypes.func,
  };

  onGetAccessToken = (data) => {
    this.props.onLogin({
      fbToken: data.accessToken,
      userID: data.userID,
    });
  };

  onLoginFinished = (error, result) => {
    if (error) {
      alert(`login has error: ${result.error}`);
      return;
    }

    if (result.isCancelled) {
      alert('login is cancelled.');
      return;
    }

    AccessToken
      .getCurrentAccessToken()
      .then(this.onGetAccessToken)
      .then(this.onLogin);
  };

  onLogoutFinished = () => {
    alert('logout');
  };

  render() {
    return (
      <View style={styles.buttonContainer}>
        <LoginButton
          publishPermissions={permissions}
          onLoginFinished={this.onLoginFinished}
          onLogoutFinished={this.onLogoutFinished}
        />
      </View>
    );
  }
}
