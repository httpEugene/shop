import React from 'react';
import { Text } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import LoginForm from '../components/login-form';
import MainOrderList from '../components/main-order-list';
import OrderItem from '../components/order-item';

import DeliveryDetails from '../components/delivery-details';

const scenes = [
  {
    key: 'login',
    component: LoginForm,
    title: 'Login',
  },
  {
    key: 'main',
    component: MainOrderList,
    title: 'My Orders',
  },
  {
    key: 'order',
    component: OrderItem,
    title: 'Order Details',
  },
  {
    key: 'deliveryDetails',
    component: DeliveryDetails,
    title: 'Delivery Details',
  },
];

const initialScene = 0;
const scenesCollections = initialSceneNumber =>
  scenes.map(({ key, component, type }, index) => {
    return index === initialSceneNumber
      ? <Scene key={key} component={component} title={type} initial />
      : <Scene key={key} component={component} title={type} />;
  });

const Navigator = () => (
  <Router>
    <Scene key="root">{scenesCollections(initialScene)}</Scene>
  </Router>
);

export default Navigator;
