import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View } from 'react-native';
import {
  Text,
  List,
  ListItem,
  FormInput,
  Button,
} from 'react-native-elements';

import ApiService from '../../common/services/api-service';
import styles from './styles';

const basketDataUrl = 'https://private-bf0eb-test12906.apiary-mock.com/basket';

function mapStateToProps({ basket }) {
  return { basket };
}

function mapDispatchToProps(dispatch) {
  return {
    getBasketData() {
      ApiService.get(basketDataUrl, 'BASKET', dispatch);
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

  renderListItem = ({
    id, title, price, image,
  }) => (
    <ListItem
      roundAvatar
      key={id}
      title={title}
      subtitle={
        <View>
          <Text>{ price }$</Text>
          <FormInput
            name="username"
            placeholder="Amount"
            type="text"
            defaultValue="1"
          />
        </View>
      }
      avatar={{ uri: image }}
    />
  );

  render() {
    const basket = this.props.basket && this.props.basket.data;
    if (!basket) return null;

    return (
      <View style={styles.container}>
        <List>
          {basket.map(this.renderListItem)}
        </List>
        <Button
          title="Checkout"
          backgroundColor="#0095EF"
        />
      </View>
    );
  }
}
