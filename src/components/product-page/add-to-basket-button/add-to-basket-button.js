import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import PushNotification from 'react-native-push-notification';
import ADD_TO_BASKET from './add-to-basket-types';

function mapStateToProps({ addToBasket }) {
  return {
    basketCount: addToBasket && addToBasket.basketCount,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    addToBasket() {
      dispatch({
        type: ADD_TO_BASKET,
      });
      PushNotification.localNotification({
        message: `${ownProps.product} added to cart`,
        title: '',
        playSound: false,
      });
    },
  };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class AddToBasketButton extends PureComponent {
  static propTypes = {
    addToBasket: PropTypes.func,
    basketCount: PropTypes.number,
    product: PropTypes.string,
  };

  componentDidMount() {
    PushNotification.configure({
      onNotification: function (notification) {
        Actions.basket();
      }
    });
  }

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
