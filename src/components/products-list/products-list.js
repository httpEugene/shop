import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Actions } from 'react-native-router-flux';
import {
  View,
  ScrollView,
} from 'react-native';
import fetchProductsListAction from './actions';
import ProductItem from '../../common/components/product-item';
import Field from '../../components/field';
import { searchProductsByName } from '../search/actions';
import getFilteredProducts from '../search/search-helper';
import styles from './styles';

function mapStateToProps(state) {
  return {
    productsList: state.productsListData && state.productsListData.productsList
      ? getFilteredProducts(state.productsListData.productsList, state.search)
      : null,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchProductsList: () => {
      dispatch(fetchProductsListAction());
    },
    filterProductsByName: (name) => {
      dispatch(searchProductsByName(name));
    },
  };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class ProductsList extends PureComponent {
  static propTypes = {
    fetchProductsList: PropTypes.func,
    productsList: PropTypes.array,
    filterProductsByName: PropTypes.func,
  };

  componentDidMount() {
    this.props.fetchProductsList();
  }

  showProductPage(id) {
    Actions.productPage({ id });
  }

  handleChangeInput = (name, text) => {
    this.props.filterProductsByName(text);
  };

  render() {
    if (!this.props.productsList) return null;
    return (
        <ScrollView style={styles.container}>
          <Field
            name="search"
            handleForm={this.handleChangeInput}
            placeholder="Enter test for search"
            type="text"
          />
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
