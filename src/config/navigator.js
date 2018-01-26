import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import LoginForm from '../components/authorization/login';
import MainOrderList from '../components/main-order-list';
import OrderItem from '../components/order-item';
import Map from '../components/map';

import DeliveryDetails from '../components/delivery-details';
import ProductsList from '../components/products-list';
import UiExamples from '../components/ui-example';
import Cart from '../components/cart';
import SideMenu from '../components/drawer/side-menu';
import CustomNavBar from '../components/navigation-header/header-component';

const Navigator = () => (
  <Router>
    <Scene key="root" hideNavBar={true}>
      <Scene key="auth" initial>
        <Scene
          key="login"
          component={ LoginForm }
          hideNavBar
          titleStyle={{ display: 'none', textAlign: 'center' }}
        />
      </Scene>
      <Scene key="drawer" contentComponent={SideMenu} drawer>
        <Scene key="main">
          <Scene
            key="main"
            component={ MainOrderList }
            title="My Orders"
            navBar={() => <CustomNavBar title={'Your Order'} /> }
            initial
          />
          <Scene
            key="productsList"
            component={ ProductsList }
            title="Products"
            navBar={() => <CustomNavBar title={'Products List'} /> }
          />
          <Scene key="cart"
            component={ Cart }
            navBar={() => <CustomNavBar title={'Your Cart'} /> }
          />
          <Scene
            key="UiExamples"
            component={UiExamples}
            navBar={() => <CustomNavBar title={'React Native Elements UI'} /> }
          />
          <Scene
            key="deliveryDetails"
            component={ DeliveryDetails }
            title="Delivery Details"
            navBar={() => <CustomNavBar title={'Delivery Details'} /> }
          />
          <Scene
            key="order"
            component={ OrderItem }
            title="Order Detail"
            navBar={() => <CustomNavBar title={'Your Order'} /> }
          />
          <Scene key="order"
            component={ OrderItem }
            title="Order Details"
            navBar={() => <CustomNavBar title={'Order Details'} /> }
          />
          <Scene key="map"
            component={ Map }
            title="Shops"
            navBar={() => <CustomNavBar title={'Shops'} /> }
          />
        </Scene>
      </Scene>
    </Scene>
  </Router>
);

export default Navigator;
