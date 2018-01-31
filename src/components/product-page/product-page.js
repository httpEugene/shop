import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { View, ScrollView, Image } from 'react-native';
import { Text } from 'react-native-elements';
import Swiper from 'react-native-swiper';
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

  renderSlide(slide) {
    return (<View style={styles.slide} key={slide.url}>
      <Image style={styles.image} source={{ uri: slide.url }}/>
    </View>);
  }

  renderProduct(product) {
    return product ? (
      <ScrollView>
        <View style={styles.container}>
          <Text h1 style={styles.title}>{product.title}</Text>
          <Swiper style={styles.slider}
                  loop
                  showsButtons
                  dot={<View style={styles.dot} />}
                  activeDot={<View style={styles.activeDot} />}
                  prevButton={<Text style={styles.controlButton}>‹</Text>}
                  nextButton={<Text style={styles.controlButton}>›</Text>}>
            {product.images.map(this.renderSlide)}
          </Swiper>
          <Text style={styles.description}>{product.description}</Text>
          <Text h3 style={styles.price}>${product.price}</Text>
        </View>
      </ScrollView>
    ) : null;
  }

  render() {
    const { product } = this.props;
    return this.renderProduct(product);
  }
}
