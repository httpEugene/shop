import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';

import styles from './styles';

export default class Field extends PureComponent {
  static propTypes = {
    placeholder: PropTypes.string,
    type: PropTypes.strategy,
    handleForm: PropTypes.func,
  };

  render() {
    return (
      <TextInput
        placeholder={this.props.placeholder}
        secureTextEntry={this.props.type === 'password'}
        onChange={this.props.handleForm}
        onKeyUp={this.props.handleForm}
        style={styles.input}
      />
    );
  }
}
