import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens';

registerScreens(); // this is where you register all of your app's screens

// start the app
Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'One',
      screen: 'example.FirstTabScreen', // this is a registered name for a screen
      icon: require('../img/one.png'),
      selectedIcon: require('../img/one_selected.png'), // iOS only
      title: 'Screen One'
    },
    {
      label: 'Two',
      screen: 'example.SecondTabScreen',
      icon: require('../img/two.png'),
      selectedIcon: require('../img/two_selected.png'), // iOS only
      title: 'Screen Two'
    }
  ]
});

import LoginForm from './src/components/login-form';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('example.FirstTabScreen', () => LoginForm);
  Navigation.registerComponent('example.SecondTabScreen', () => LoginForm);
  Navigation.registerComponent('example.PushedScreen', () => LoginForm);
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <LoginForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  }
});
