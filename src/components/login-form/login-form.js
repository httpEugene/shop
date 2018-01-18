import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import Field from '../field';
import Button from '../button';
import styles from './styles';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    onRegisterSubmit(data) {
      // dispatch(registerRequestAction(data));
    },
    onLogin(data) {
      // dispatch(loginRequestAction(data));
      console.log('hi')
    },
  };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class LoginForm extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.fieldContainer}>
            <Field placeholder="Enter your login" />
          </View>
          <View style={styles.fieldContainer}>
            <Field placeholder="Enter your password" type="password" />
          </View>
          <View style={styles.buttonContainer}>
            <Button onPressHandler={this.props.onLogin}/>
          </View>
        </View>
      </View>
    );
  }
}
