import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { View, ScrollView, AsyncStorage } from 'react-native';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import styles from './styles';
import { loadOrders } from './actions/order-actions';
import OrderItem from './order-item';
import SortForm from '../sort-form';
import Loader from '../loader';

function mapStateToProps(state) {
  return {
    orders: state.orders,
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
    AsyncStorage.getItem('credentials', (err, result) => {
      console.log('credentials  ', result);
      this.props.loadOrders(result);
    });
  }

  render() {
    const { orders } = this.props;

    return (
      <ScrollView contentContainerStyle={styles.containerScroll}>
        <SortForm />
        <View style={styles.container}>
          {orders.length === 0 ?
            (<View style={styles.containerLoader}>
              <Loader />
            </View>)
              : orders.map(post => <OrderItem key={post.id} post={post} />)
          }
        </View>
      </ScrollView>
    );
  }
}
