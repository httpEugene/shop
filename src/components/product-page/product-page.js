import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { View, ScrollView, Image } from 'react-native';
import { Text } from 'react-native-elements';
import Swiper from 'react-native-swiper';
import styles from './styles';
import fetchProductData from './actions';
import SpecsTable from './specs-table';
import Rating from './../rating';
import AddToBasketButton from './add-to-basket-button/add-to-basket-button';
import Comments from './../comments';

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

  renderSlide({ url }) {
    return (
      <View style={styles.slide} key={url}>
        <Image style={styles.image} source={{ uri: url }} />
      </View>
    );
  }

  renderProduct(product) {
    return product ? (
      <ScrollView>
        <View style={styles.container}>
          <Text h1 style={styles.title}>
            {product.title}
          </Text>
          <View style={styles.rating}>
            <Rating options={{ rating: 4 }} />
          </View>
          <Swiper
            style={styles.slider}
            loop
            showsButtons
            dot={<View style={styles.dot} />}
            activeDot={<View style={styles.activeDot} />}
            prevButton={<Text style={styles.controlButton}>‹</Text>}
            nextButton={<Text style={styles.controlButton}>›</Text>}
          >
            {product.images.map(this.renderSlide)}
          </Swiper>
          <Text style={styles.description}>{product.description}</Text>
          <Text h4 style={styles.specsTitle}>Technical Specifications</Text>
          <SpecsTable specs={product.specs}/>
          <Text h3 style={styles.price}>
            ${product.price}
          </Text>
          <AddToBasketButton/>
          <Text h4>Comments:</Text>
          <Comments/>
        </View>
      </ScrollView>
    ) : null;
  }

  render() {
    const { product } = this.props;
    return this.renderProduct(product);
  }
}
