import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import {
  View,
  Image,
} from 'react-native';
import {
  Text,
  List,
  ListItem,
} from 'react-native-elements';
import fetchProductsListAction from './actions';

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

  render() {
    if (!this.props.productsList) return null;
    return (
        <View>
          <List>
            {this.props.productsList.map(({
              id, title, price, image,
            }) => (
              <ListItem
                roundAvatar
                key={id}
                title={title}
                subtitle={
                  <View>
                    <Image source={{ uri: 'https://www.zappas.co.uk/files/2013/01/five-stars.png' }}/>
                    <Text>{ price }$</Text>
                  </View>
                }
                avatar={{ uri: image }}
              />
            ))}
          </List>
        </View>
    );
  }
}
