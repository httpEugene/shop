import React from 'react';
import { Text } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import LoginForm from '../components/login-form';

const Second = () => (
  <Text>Second Screen</Text>
);

const Navigator = () => (
  <Router>
    <Scene key="root">
      <Scene
        key="login"
        component={LoginForm}
        title="Login"
        initial
      />
      <Scene
        key="gray"
        component={Second}
        title="Gray"
      />
    </Scene>
  </Router>
);

export default Navigator;
