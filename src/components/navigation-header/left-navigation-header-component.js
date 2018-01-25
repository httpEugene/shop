import React, { PureComponent } from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

export default class leftNavigationComponent extends PureComponent {
  handlePress = () => {
    Actions.drawerOpen();
  };
  render() {
    return (
      <TouchableOpacity onPress={this.handlePress}>
        <Icon name="menu" color="#fff" />
      </TouchableOpacity>
    );
  }
}
