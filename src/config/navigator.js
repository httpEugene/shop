import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import LoginForm from '../components/authorization/login';
import OrderList from '../components/order-list';
import OrderItem from '../components/order-item';
import Map from '../components/map';

import DeliveryDetails from '../components/delivery-details';
import ProductsList from '../components/products-list';
import ProductPage from '../components/product-page';
import UiExamples from '../components/ui-example';
import Cart from '../components/cart';
import Feedback from '../components/feedback';
import UserDetails from '../components/user-details';
import SideMenu from '../components/drawer/side-menu';
import CustomNavBar from '../components/navigation-header/header-component';
import Auth0Sample from '../components/auth0/index';

const Navigator = () => (
  <Router>
    <Scene key="root" hideNavBar={true}>
      <Scene key="auth" initial>
        <Scene
          key="login"
          component={LoginForm}
          hideNavBar
          titleStyle={{ display: 'none', textAlign: 'center' }}
        />
      </Scene>
      <Scene key="drawer" contentComponent={SideMenu} drawer>
        <Scene key="main">
          <Scene
            key="main"
            component={OrderList}
            title="Products"
            navBar={() => <CustomNavBar title={'Shop'} />}
            initial
          />
          <Scene
            key="orders"
            component={OrderList}
            title="My Orders"
            navBar={() => <CustomNavBar title={'Your Orders'} />}
          />
          <Scene
            key="order"
            component={OrderItem}
            title="Order Details"
            navBar={() => <CustomNavBar title={'Order Details'} />}
          />
          <Scene
            key="orderFeedback"
            component={Feedback}
            title="Order Feedback"
            navBar={() => <CustomNavBar title={'Your Feedback'} />}
          />
          <Scene
            key="productsList"
            component={ProductsList}
            title="Products"
            navBar={() => <CustomNavBar title={'Products List'} />}
          />
          <Scene
            key="productPage"
            component={ProductPage}
            title="Product"
            navBar={() => <CustomNavBar title={'Product Page'} />}
          />
          <Scene
            key="cart"
            component={Cart}
            navBar={() => <CustomNavBar title={'Your Cart'} />}
          />
          <Scene
            key="UiExamples"
            component={UiExamples}
            navBar={() => <CustomNavBar title={'React Native Elements UI'} />}
          />
          <Scene
            key="deliveryDetails"
            component={DeliveryDetails}
            title="Delivery Details"
            navBar={() => <CustomNavBar title={'Delivery Details'} />}
          />
          <Scene
            key="map"
            component={Map}
            title="Shops"
            navBar={() => <CustomNavBar title={'Shops'} />}
          />
          <Scene
            key="user"
            component={UserDetails}
            title="Personal info"
            navBar={() => <CustomNavBar title={'Your info'} />}
          />
          <Scene
            key="auth0"
            component={Auth0Sample}
            title="Auth0Sample"
            navBar={() => <CustomNavBar title={'Auth0Sample'} />}
          />
        </Scene>
      </Scene>
    </Scene>
  </Router>
);

export default Navigator;
