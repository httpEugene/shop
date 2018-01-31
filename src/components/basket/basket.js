import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, FlatList } from 'react-native';
import { get } from '../../common/services/api-service';
import Product from './product';
import styles from './styles';

const basketDataUrl = 'https://private-bf0eb-test12906.apiary-mock.com/basket';

function mapStateToProps(state) {
  return {
    basket: state.basket,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getBasketData() {
      get(basketDataUrl, 'BASKET', dispatch);
    },
  };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Basket extends PureComponent {
  static propTypes = {
    basket: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
      })),
      isFetching: PropTypes.boolean,
    }),
    getBasketData: PropTypes.func,
  };

  componentDidMount() {
    this.props.getBasketData();
  }

  keyExtractor = ({ id }) => id;

  renderItem = ({ item }) => (
    <Product
      data={item}
    />
  );

  renderBasket = () => {
    const basket = this.props.basket && this.props.basket.data;

    if (!basket) return null;

    return (
      <FlatList
        data={basket}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
      />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {this.renderBasket()}
      </View>
    );
  }
}
