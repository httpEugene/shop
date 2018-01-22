import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import styles from './styles';
import OrderItem from './order-item';
import SortForm from '../sort-form';


function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

@connect(mapStateToProps, mapDispatchToProps)

export default class MainOrderList extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <SortForm />
        <OrderItem/>
      </View>
    );
  }
}
