import React, { PureComponent } from 'react';
import { Actions } from 'react-native-router-flux';
import { ScrollView, View, Text } from 'react-native';

import { connect } from 'react-redux';
import Button from '~/components/button';

import styles from './styles';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

@connect(mapStateToProps, mapDispatchToProps)
export default class OrderItem extends PureComponent {
  getDeliveryDetails = (id) => {
    Actions.deliveryDetails({id});
  };

  getDetails = () => {
    Actions.order();
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.listItemContainer}>
          <Text style={styles.id}>id</Text>
          <Text style={styles.date}>date</Text>
        </View>

        <View style={styles.statusContainer}>
          <Text style={styles.statusText}>STATUS: </Text>
          <Text style={styles.status}>DONE</Text>
        </View>

        <View style={styles.purchaseContainer}>
          <Text style={styles.purchaseItem}>1 ITEM</Text>
          <Text style={styles.purchaseSumm}>180$</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            styleName="details"
            styleTextName="buttonTextSecond"
            label="Details"
            onPressHandler={() => this.getDetails()}
          />
          <Button
            styleName="deliveryDetails"
            styleTextName="buttonTextSecond"
            label="Delivery Details"
            onPressHandler={() => this.getDeliveryDetails("1")}
          />
        </View>
      </ScrollView>
    );
  }
}
