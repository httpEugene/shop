import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import { View, Text } from 'react-native';
import Button from '../button';
import styles from './styles';

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    onBackClick() {
      Actions.productsList();
    },
  };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class ProductPage extends PureComponent {
  static propTypes = {
    id: PropTypes.string,
    onBackClick: PropTypes.func,
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          styleName="backButton"
          styleTextName="backButtonText"
          label="< Back"
          onPressHandler={this.props.onBackClick}
        />
        <Text>Product #{this.props.id}</Text>
      </View>
    );
  }
}
