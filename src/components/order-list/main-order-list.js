import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { View, ScrollView } from 'react-native';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import styles from './styles';
import { loadOrders } from './actions/orderActions';
import OrderItem from './order-item';
import SortForm from '../sort-form';

function mapStateToProps(state) {
  return {
    orders: state.ordersData,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadOrders: bindActionCreators(loadOrders, dispatch),
  };
};

@connect(mapStateToProps, mapDispatchToProps)
export default class MainOrderList extends PureComponent {
  static propTypes = {
    loadOrders: PropTypes.func,
    orders: PropTypes.array,
  };
  componentDidMount() {
    this.props.loadOrders();
  }

  render() {
    const { orders } = this.props;

    return (
      <ScrollView style={styles.container}>
        <SortForm />

        <View style={ styles.container }>
          {orders
            ? orders.map(post => <OrderItem key={post.id} post={post} />)
            : 'Loading...'}
        </View>
      </ScrollView>
    );
  }
}
