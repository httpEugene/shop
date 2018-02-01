import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';

import styles from './styles';

export default class Field extends PureComponent {
  static propTypes = {
    placeholder: PropTypes.string,
    type: PropTypes.string,
    handleForm: PropTypes.func,
    name: PropTypes.string,
  };

  onInputChange = (text, name, cb) => {
    cb(name, text);
  };

  render() {
    const {
      name, placeholder, type, handleForm,
    } = this.props;
    return (
      <TextInput
        name={name}
        placeholder={placeholder}
        secureTextEntry={type === 'password'}
        onChangeText={text => this.onInputChange(text, name, handleForm)}
        onKeyUp={handleForm}
        style={styles.input}
        underlineColorAndroid='transparent'
      />
    );
  }
}
