import React, { PureComponent } from 'react';
import {
        TouchableHighlight,
        TouchableOpacity,
        View,
        Text
    } from 'react-native';

import styles from './styles';

export default class Button extends PureComponent {
      render() {
        return (
           <TouchableOpacity style={styles[this.props.styleName]} onPress={this.props.onPressHandler}>
                 <Text style={styles[this.props.styleTextName]}>{this.props.label}</Text>
           </ TouchableOpacity>
        );
      }
}


