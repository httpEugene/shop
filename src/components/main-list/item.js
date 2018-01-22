import React, { PureComponent } from 'react';
import {
  View,
  Text,
} from 'react-native';

import { connect } from 'react-redux';
import styles from './styles';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Item extends PureComponent {
  render() {
    return (
      <View style={styles.listItemContainer}>
        <Text>...Item...</Text>
        <Text>Name</Text>
        <Text>Image</Text>
        <Text>Items</Text>
        <Text>Price</Text>
      </View>
    );
  }
}
