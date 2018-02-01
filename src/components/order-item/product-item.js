import React, { PureComponent } from 'react';
import { Text } from 'react-native';
import { Card } from 'react-native-elements';
import PropTypes from 'prop-types';

import styles from './styles';

export default class OrderItem extends PureComponent {
  static propTypes = {
    product: PropTypes.shape(),
  };

  render() {
    const {
      name, items, price, image,
    } = this.props.product;
    return (
      <Card title={name} image={{ uri: image }}>
        <Text style={styles.productItems}>items: {items}</Text>
        <Text style={styles.productPrice}>{price}$</Text>
      </Card>
    );
  }
}
