import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getOrderDetails } from './actions/order-actions';

import Button from '../button';
import ProductItem from './product-item';
import styles from './styles';

@connect(state => state, dispatch => bindActionCreators({ getOrderDetails }, dispatch))
export default class OrderItem extends PureComponent {
  static propTypes = {
    getOrderDetails: PropTypes.func,
    post: PropTypes.shape({
      id: PropTypes.string,
      date: PropTypes.string,
      products: PropTypes.array,
      items: PropTypes.number,
      summ: PropTypes.string,
      deliveryStatus: PropTypes.string,
    }),
  };
  getDeliveryDetails = () => {
    Actions.deliveryDetails();
  };

  getDetails = (id) => {
    this.props.getOrderDetails(id);
    Actions.order();
  };

  renderProductList = (products) => {
    return products.map((product, index) => {
      return <ProductItem key={`product${index}`} product={product} />;
    });
  };

  render() {
    const {
      id, date, products, items, summ, deliveryStatus,
    } = this.props.post;

    return (
      <View style={styles.orderContainer}>
        <View style={styles.listItemContainer}>
          <Text style={styles.id}>{id}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>

        <View style={ styles.productListStyle }>{this.renderProductList(products)}</View>

        <View style={styles.statusContainer}>
          <Text style={styles.statusText}>STATUS: </Text>
          <Text style={styles.status}>{deliveryStatus}</Text>
        </View>

        <View style={styles.purchaseContainer}>
          <Text style={styles.purchaseItem}>Items: {items}</Text>
          <Text style={styles.purchaseSumm}>{summ}$</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            styleName="details"
            styleTextName="buttonTextSecond"
            label="Details"
            onPressHandler={() => this.getDetails(id)}
          />
          <Button
            styleName="deliveryDetails"
            styleTextName="buttonTextSecond"
            label="Delivery Details"
            onPressHandler={() => this.getDeliveryDetails()}
          />
        </View>
      </View>
    );
  }
}
