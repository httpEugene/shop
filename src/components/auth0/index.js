import React, { Component } from 'react';
import {
  Alert,
  Button,
  Platform,
  StyleSheet,
  Text,
  View,
  AsyncStorage,
} from 'react-native';
import Auth0 from 'react-native-auth0';

import credentials from './auth0-credentials';

const auth0 = new Auth0(credentials);

export default class Auth0Sample extends Component {
  state = {
    accessToken: null,
  };
  _onLogin = () => {
    auth0.webAuth
      .authorize({
        scope: 'openid profile',
        audience: `https://${credentials.domain}/userinfo`,
      })
      .then((credentials) => {
        Alert.alert(
          'Success',
          `AccessToken: ${credentials.accessToken}`,
          [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
          { cancelable: false },
        );
        this.setState({ accessToken: credentials.accessToken });
        AsyncStorage.setItem('credentials', credentials.accessToken);
      })
      .catch(error => console.log(error));
  };

  _onLogout = () => {
    if (Platform.OS === 'android') {
      this.setState({ accessToken: null });
    } else {
      auth0.webAuth
        .clearSession({})
        .then((success) => {
          this.setState({ accessToken: null });
        })
        .catch(error => console.log(error));
    }
  };

  render() {
    const loggedIn = this.state.accessToken !== null;
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Auth0Sample - Login</Text>
        <Text>You are {loggedIn ? '' : 'not '} logged in.</Text>
        <Button
          onPress={loggedIn ? this._onLogout : this._onLogin}
          title={loggedIn ? 'Log Out' : 'Log In'}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
