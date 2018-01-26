import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import LoginForm from '../components/authorization/login';
import MainOrderList from '../components/main-order-list';
import OrderItem from '../components/order-item';
import Map from '../components/map';

import DeliveryDetails from '../components/delivery-details';
import UiExamples from '../components/ui-example';
import Cart from '../components/cart';
import SideMenu from '../components/drawer/side-menu';
import CustomNavBar from '../components/navigation-header/header-component';


import Comments from '../components/comments';
const a = [{
  text: 'fdfdfs',
  id: 343
}]
const Navigator = () => (
  <Comments comments={a} />
);

export default Navigator;
