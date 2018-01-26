import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
} from 'react-native';
import styles from './styles';


function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

@connect(mapStateToProps, mapDispatchToProps)

export default class Order extends PureComponent {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.listItemContainer}>
          <Text style={styles.name}>Name</Text>
        </View>

        <View style={styles.listItemContainer}>
          <Text>Image</Text>
        </View>

        <View style={styles.purchaseContainer}>
          <Text style={styles.purchaseItem}>1 ITEM</Text>
          <Text style={styles.purchaseSumm}>180$</Text>
        </View>

        <View style={styles.purchaseContainer}>
          <Text style={styles.purchaseItem}>1 ITEM</Text>
          <Text style={styles.purchaseSumm}>180$</Text>
        </View>

      </View>
    );
  }
}
