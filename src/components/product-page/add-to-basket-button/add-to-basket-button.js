import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'react-native-elements';

function mapStateToProps(state) {
  return {
    basketCount: state.addToBasket && state.addToBasket.basketCount,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addToBasket() {
      dispatch({
        type: 'ADD_TO_BASKET',
      });
    },
  };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class AddToBasketButton extends PureComponent {
  static propTypes = {
    addToBasket: PropTypes.func,
    basketCount: PropTypes.number,
  };

  render() {
    return (
      <Button
        iconLeft={{ name: 'shopping-cart' }}
        title="Add to Cart"
        backgroundColor="#0095EF"
        onPress={this.props.addToBasket}
      />
    );
  }
}
