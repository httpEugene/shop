import React, { PureComponent } from 'react';
import { TextInput } from 'react-native';

import styles from './styles';

export default class Field extends PureComponent {
     constructor(props) {
        super(props);
     }

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
