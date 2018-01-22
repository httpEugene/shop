import React, { PureComponent } from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import {
  View,
  Text,
} from 'react-native';

import styles from './styles';
import Order from './order';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

@connect(mapStateToProps, mapDispatchToProps)

export default class DetailedOrder extends PureComponent {
  getDeliveryDetails = () => {
    Actions.deliveryDetails();
  }

  getDetails = () => {
    // Actions.details();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.listItemContainer}>
          <Text style={styles.id}>id</Text>
          <Text style={styles.date}>date</Text>
        </View>

        <View style={styles.statusContainer}>
          <Text style={styles.statusText}>STATUS: </Text>
          <Text style={styles.status}>DONE</Text>
        </View>

        <Order/>

        <View style={styles.statusContainer}>
          <Text style={styles.shippingText}>Shipping</Text>
          <Text style={styles.shippingPrice}>10$</Text>
        </View>
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total</Text>
          <Text style={styles.totalPrice}>100$</Text>
        </View>
      </View>
    );
  }
}
