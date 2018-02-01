import React, { PureComponent } from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { ButtonGroup, Icon } from 'react-native-elements';

import { ScrollView, View, Text } from 'react-native';

import { loadOrderDetails } from './actions/order-detais-action';
import styles from './styles';
import ProductItem from './product-item';
import Loader from '../loader';

@connect(
  state => state,
  dispatch => bindActionCreators({ loadOrderDetails }, dispatch),
)
export default class DetailedOrder extends PureComponent {
  static propTypes = {
    order: PropTypes.shape({
      id: PropTypes.string,
    }),
    orderDetails: PropTypes.shape({
      date: PropTypes.string,
      products: PropTypes.array,
      items: PropTypes.string,
      delivery: PropTypes.string,
      total: PropTypes.string,
      deliveryStatus: PropTypes.string,
      feedback: PropTypes.shape({
        status: PropTypes.string,
        statusCode: PropTypes.string,
        comment: PropTypes.string,
      }),
    }),
    loadOrderDetails: PropTypes.func,
  };

  state = {
    selectedIndex: 2,
  };

  componentDidMount() {
    this.props.loadOrderDetails(this.props.order.id);
  }

  updateIndex = (selectedIndex) => {
    selectedIndex === 0 ? Actions.orders() : Actions.orderFeedback();
    this.setState({ selectedIndex });
  };

  gotodeliveryDetails = () => {
    Actions.deliveryDetails();
  }

  renderProducts = (id, products) => {
    if (products.length === 0) {
      return (
        <Loader />
      );
    }
    return [...products].map((product, index) => {
      return <ProductItem key={`${id}${index}`} product={product} />;
    });
  };

  render() {
    const {
      date,
      products,
      items,
      delivery,
      total,
      deliveryStatus,
    } = this.props.orderDetails;

    const { id } = this.props.order;

    const buttons = ['< Back', 'Feedback >'];
    const { selectedIndex } = this.state;

    return (
      <ScrollView style={styles.container}>
        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={styles.ButtonGroup}
        />
        <View style={styles.orderContainer}>
          <View style={styles.listItemContainer}>
            <Text style={styles.id}>ID:{id}</Text>
            <Text style={styles.date}>{date}</Text>
          </View>
          <View style={styles.statusContainer}>
            <Text style={styles.statusText}>STATUS: </Text>
            <Text style={styles.status}>{deliveryStatus}</Text>
            <Icon
              raised
              name='chevron-double-right'
              type='font-awesome'
              color='#f50'
              onPress={() => this.gotodeliveryDetails()}
            />
          </View>
          <View style={styles.productListStyle}>
            {products && this.renderProducts(id, products)}
          </View>
          <View style={styles.statusContainer}>
            <Text style={styles.shippingText}>Shipping</Text>
            <Text style={styles.shippingPrice}>{delivery}$</Text>
          </View>
          <View style={styles.purchaseContainer}>
            <Text style={styles.purchaseItem}>Items: {items}</Text>
            <Text style={styles.purchaseSumm}>{total}$</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}
