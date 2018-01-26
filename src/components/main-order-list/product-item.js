import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { List, ListItem } from 'react-native-elements';
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

    return <List>
      <ListItem
        roundAvatar
        subtitle={
          <View style={styles.subtitleView}>
            <Text style={styles.productName}>{name}</Text>
            <Text style={styles.productItems}>items: {items}</Text>
            <Text style={styles.productPrice}>{price}$</Text>
          </View>
        }
        avatar={{
          uri: image,
        }}
        hideChevron={true}
      />
    </List>;
  }
}
