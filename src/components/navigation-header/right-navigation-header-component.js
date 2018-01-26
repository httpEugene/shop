import React, { PureComponent } from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon, Badge } from 'react-native-elements';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import styles from './styles';

export default class rightNavigationComponent extends PureComponent {
  static propTypes = {
    handlePress: PropTypes.func,
    route: PropTypes.string,
  };

  handlePress = () => {
    const { route } = this.props;
    Actions[route]();
  }

  render() {
    return (
      <TouchableOpacity style={ styles.touchableOpacity } onPress={this.handlePress}>
        <Badge value={3} textStyle={ styles.badgeText } containerStyle={ styles.badgeContainer } />
        <Icon name="shopping-cart" color="#fff" />
      </TouchableOpacity>
    );
  }
}
