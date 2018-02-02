import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Actions } from 'react-native-router-flux';
import {
  View,
  ScrollView,
} from 'react-native';
import fetchProductsListAction from './actions';
import ProductItem from './product-item';
import styles from './styles';

function mapStateToProps(state) {
  return {
    productsList: state.productsListData
      ? state.productsListData.productsList
      : null,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchProductsList: () => {
      dispatch(fetchProductsListAction());
    },
  };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class ProductsList extends PureComponent {
  static propTypes = {
    fetchProductsList: PropTypes.func,
    productsList: PropTypes.array,
  };

  componentDidMount() {
    this.props.fetchProductsList();
  }

  showProductPage(id) {
    Actions.productPage({ id });
  }

  render() {
    if (!this.props.productsList) return null;
    return (
        <ScrollView style={styles.container}>
          <View style={ styles.container }>
            {this.props.productsList.map(({
              id, title, price, image,
            }) => (
              <ProductItem
                key={ id }
                product={{
                  id, title, price, image, items: Math.floor(Math.random() * 20),
                }}
                showProductPage={this.showProductPage}
              />
            ))}
          </View>
        </ScrollView>
    );
  }
}
