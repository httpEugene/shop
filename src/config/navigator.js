import React from 'react';
import { Text } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import LoginForm from '../components/login-form';
import MainOrderList from '../components/main-order-list';
import OrderItem from '../components/order-item';

import DeliveryDetails from '../components/delivery-details';

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
      <Scene
        key="main"
        component={MainOrderList}
        title="My Orders"
      />
      <Scene
        key="order"
        component={OrderItem}
        title="Order Details"
      />

      <Scene
        key="deliveryDetails"
        component={DeliveryDetails}
        title="Delivery Details"
      />
    </Scene>
  </Router>
);

export default Navigator;
