import React, { PureComponent } from 'react';
import { View } from 'react-native';
import Field from '../field';
import Button from '../button';
import styles from './styles';

export default class LoginForm extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.fieldContainer}>
            <Field placeholder="Enter your login" />
          </View>
          <View style={styles.fieldContainer}>
            <Field placeholder="Enter your password" type="password" />
          </View>
          <View style={styles.buttonContainer}>
            <Button />
          </View>
        </View>
      </View>
    );
  }
}
