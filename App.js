import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import LoginForm from './src/components/login-form';

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
