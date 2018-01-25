import React, { PureComponent } from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon, Badge } from 'react-native-elements';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';

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
      <TouchableOpacity style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
      }} onPress={this.handlePress}>
        <Badge value={3} textStyle={{ color: 'orange' }} containerStyle={{ backgroundColor: '#333' }} />
        <Icon name="shopping-cart" color="#fff" />
      </TouchableOpacity>
    );
  }
}
