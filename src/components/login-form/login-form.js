import React, { PureComponent } from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Field from '../field';
import Button from '../button';
import styles from './styles';
import {
    View,
    Text,
    TextInput,
    TouchableHighlight,
    TouchableOpacity,
} from 'react-native';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    onRegisterSubmit(data) {
      // dispatch(registerRequestAction(data));
    },
    onLogin(data) {
      // dispatch(loginRequestAction(data));
      Actions.gray()
    },
  };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class LoginForm extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.fieldContainer}>
          <Text style={styles.login}>Login</Text>
            <Field style={styles.input} placeholder="Enter your login" />

             <TextInput
                defaultValue='Test'
                style={styles.input}
                value='test'
              />
              <Text style={styles.login}>Password</Text>

              <Field placeholder="Enter your password" type="password" />
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPressHandler={this.props.onLogin}>
                  <Text style={styles.buttonText}>Login</Text>
            </ TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
