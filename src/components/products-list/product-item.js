import React, { PureComponent } from 'react';
import { View, Text, TextInput } from 'react-native';
import { List, ListItem, Button } from 'react-native-elements';
import PropTypes from 'prop-types';
import AddToBasketButton from '../product-page/add-to-basket-button/add-to-basket-button';

import styles from './styles';

export default class OrderItem extends PureComponent {
  static propTypes = {
    product: PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      price: PropTypes.number,
      items: PropTypes.number,
      image: PropTypes.string,
    }),
    basket: PropTypes.bool,
    showProductPage: PropTypes.func,
  };

  shopListButtons() {
    return (
      <View style={styles.buttonContainer}>
        <Button
          iconLeft={{ name: 'shopping-cart' }}
          title="To Favorites"
          backgroundColor="#FDC02F"
        />
        <AddToBasketButton/>
      </View>
    );
  }

  basketListElements() {
    return (
      <View style={styles.buttonContainer}>
        <TextInput
          placeholder="Count"
          style={{
            borderWidth: 1,
            borderColor: 'lightgrey',
            paddingLeft: 0,
            marginLeft: 10,
            width: 50,
            height: 45,
          }}
          defaultValue={'1'}
          textAlign={'center'}
        />
        <Button
          iconLeft={{ name: 'shopping-cart' }}
          title="Remove"
          backgroundColor="red"
        />
      </View>
    );
  }

  render() {
    const {
      id, title, items, price, image,
    } = this.props.product;

    return (
      <View style={styles.orderContainer}>
        <View style={ styles.productListStyle }>
          <List>
            <ListItem
              containerStyle={{ borderBottomWidth: 0 }}
              roundAvatar
              subtitle={
                <View style={styles.subtitleView}>
                  <Text style={styles.productName}>{title}</Text>
                  <Text style={styles.productItems}>items: {items}</Text>
                </View>
              }
              avatar={{
                uri: image,
              }}
              hideChevron={false}
              onPress={() => this.props.showProductPage(id)}
            />
          </List>
        </View>

        <View style={styles.purchaseContainer}>
          <Text style={styles.status}>In stock</Text>
          <Text style={styles.purchaseSumm}>{price}$</Text>
        </View>

        { this.props.basket
          ? this.basketListElements()
          : this.shopListButtons()
        }
      </View>
    );
  }
}
