import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store';

// registerScreens(); // this is where you register all of your app's screens

// start the app


import LoginForm from './src/components/login-form';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <LoginForm/>
        </View>
      </Provider>
    );
  }
}
