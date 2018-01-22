import React, { PureComponent } from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import {
  View,
  Text,
} from 'react-native';

import styles from './styles';
import Item from './item';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

@connect(mapStateToProps, mapDispatchToProps)
export default class ListItem extends PureComponent {
  getDeliveryDetails = () => {
    Actions.deliveryDetails();
  };

  getDetails = () => {
    // Actions.details();
  };

  render() {
    return (
      <View style={styles.listItemContainer}>
        <Text>-----Detailes List------</Text>
        <Text style={styles.id}>id</Text>
        <Text style={styles.date}>date</Text>

        <View style={styles.statusContainer}>
          <Text style={styles.status}>status</Text>
          <Text style={styles.status}>DONE</Text>
        </View>

        <Item />

        <View style={styles.statusContainer}>
          <Text style={styles.status}>Shipping</Text>
          <Text style={styles.status}>10$</Text>
        </View>
        <View style={styles.statusContainer}>
          <Text style={styles.status}>Total</Text>
          <Text style={styles.status}>100$</Text>
        </View>
      </View>
    );
  }
}
