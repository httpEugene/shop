import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';
import Rating from '../../rating';
import styles from './styles';

export default class Comments extends PureComponent {
  static propTypes = {
    data: PropTypes.shape({
      title: PropTypes.string,
      image: PropTypes.string,
      rating: PropTypes.number,
      price: PropTypes.number,
    }),
  };

  render() {
    const {
      title, price, rating, image,
    } = this.props.data;

    return (
      <View style={styles.product}>
        <Text>{ title }</Text>
        <Text>{ `${price}$` }</Text>
        <Image
          source={{ uri: image }}
        />
        <Rating options={{ rating }}/>
      </View>
    );
  }
}
