import React, { PureComponent } from 'react';
import { TouchableHighlight, View, Text } from 'react-native';

import styles from './styles';

export default class Button extends PureComponent {
  render() {
    return (
      <TouchableHighlight
        onPress={this.props.onPressHandler}
        style={styles.button}
      >
        <Text>Login</Text>
      </TouchableHighlight>
    );
  }
}
