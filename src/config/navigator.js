import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import LoginForm from '../components/authorization/login';
import MainOrderList from '../components/main-order-list';
import OrderItem from '../components/order-item';
import Map from '../components/map';

import DeliveryDetails from '../components/delivery-details';
import UiExamples from '../components/ui-example';

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
  {
    key: 'UiExamples',
    component: UiExamples,
    title: 'React Native Elements UI Toolkit for UI',
  },
  {
    key: 'Map',
    component: Map,
    title: 'Map',
  },
];

const initialScene = 5;
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
