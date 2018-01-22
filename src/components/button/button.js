import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import {
  TouchableOpacity,
  Text,
} from 'react-native';

import styles from './styles';

export default class Button extends PureComponent {
  static propTypes = {
    styleName: PropTypes.string,
    styleTextName: PropTypes.string,
    label: PropTypes.string,
    onPressHandler: PropTypes.func,
  };

  render() {
    return (
      <TouchableOpacity style={styles[this.props.styleName]} onPress={this.props.onPressHandler}>
        <Text style={styles[this.props.styleTextName]}>{this.props.label}</Text>
      </ TouchableOpacity>
    );
  }
}

