import React, { PureComponent } from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon, Badge } from 'react-native-elements';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import styles from './styles';

function mapStateToProps(state) {
  return {
    basketCount: state.addToBasket && state.addToBasket.basketCount,
  };
}

@connect(mapStateToProps, null)
export default class rightNavigationComponent extends PureComponent {
  static propTypes = {
    handlePress: PropTypes.func,
    route: PropTypes.string,
    basketCount: PropTypes.number,
  };

  handlePress = () => {
    const { route } = this.props;
    Actions[route]();
  }

  render() {
    return (
      <TouchableOpacity style={ styles.touchableOpacity } onPress={this.handlePress}>
        <Badge
          value={this.props.basketCount}
          textStyle={ styles.badgeText }
          containerStyle={ styles.badgeContainer }
        />
        <Icon name="shopping-cart" color="#fff" />
      </TouchableOpacity>
    );
  }
}
