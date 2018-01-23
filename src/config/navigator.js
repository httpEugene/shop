import React from 'react';
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
const scenesComponent = initialSceneNumber =>
  scenes.map((el, index) => {
    if (index === initialSceneNumber) {
      return (
        <Scene key={el.key} component={el.component} title={el.type} initial />
      );
    }

    return <Scene key={el.key} component={el.component} title={el.type} />;
  });

const Navigator = () => (
  <Router>
    <Scene key="root">{scenesComponent(initialScene)}</Scene>
  </Router>
);

export default Navigator;
