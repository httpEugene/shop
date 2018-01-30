import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import styles from './styles';
import fetchProductData from './actions';

function mapStateToProps(state) {
  return {
    product: state.product && state.product.product,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    getProductData() {
      dispatch(fetchProductData(ownProps.id));
    },
  };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class ProductPage extends PureComponent {
  static propTypes = {
    id: PropTypes.string,
    onBackClick: PropTypes.func,
    getProductData: PropTypes.func,
    product: PropTypes.object,
  };

  componentDidMount() {
    this.props.getProductData();
  }

  renderProduct(product) {
    return product ? (
      <View style={styles.container}>
        <Text h1>{product.title}</Text>
        <Text>{product.description}</Text>
        <Text h3>${product.price}</Text>
      </View>
    ) : null;
  }

  render() {
    const { product } = this.props;
    return this.renderProduct(product);
  }
}
