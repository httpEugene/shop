import React, { PureComponent } from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import Field from '../../field';
import Button from '../../button';
import styles from './styles';
import login from './actions/login';

import { isEmail } from '../../../common/services/validator';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    onRegisterSubmit() {},
    onLogin(data) {
      dispatch(login(data));
    },
  };
}

let wrongEmailFormat = false;
let wrongEmailValue = false;
let wrongPassword = false;

@connect(mapStateToProps, mapDispatchToProps)
export default class LoginForm extends PureComponent {
  static propTypes = {
    loginUser: PropTypes.func,
    onLogin: PropTypes.func,
    nextProps: PropTypes.shape({
      user: PropTypes.str,
    }),
  };

  state = {
    username: '',
    password: '',
    errors: {},
  };

  checkEmailFormatCorrected = () => {
    wrongEmailFormat = !isEmail(this.state.username);
  };

  checkEmailValue = () => {
    wrongEmailValue = this.state.username !== 'test@gmail.com';
  };

  checkPassword = () => {
    wrongPassword = this.state.password !== 'test';
  };

  isCredentialsCorrect = () => {
    this.checkEmailFormatCorrected();
    this.checkEmailValue();
    this.checkPassword();

    this.setState({
      errors: {
        wrongEmailFormat,
        wrongEmailValue,
        wrongPassword,
      },
    });
  };

  componentWillUpdate(nextProps, nextState) {
    const errorKeys = Object.keys(nextState.errors);
    let errors = false;

    errorKeys.some((key) => {
      if (nextState.errors[key]) {
        errors = true;
        return true;
      }

      return false;
    });

    if (!errors) {
      Actions.main();
    }
  }

  handleChangeInput = (prop, value) => {
    this.setState({
      [prop]: value,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.formWrapper}>
          <Field
            name="username"
            onChangeHandler={this.onChangeHandler}
            handleForm={this.handleChangeInput}
            placeholder="Enter your login"
            type="text"
          />
          {wrongEmailFormat && (
            <Text style={styles.error}>
              You entered not valid email address
            </Text>
          )}
          {wrongEmailValue && (
            <Text style={styles.error}>You entered wrong email</Text>
          )}
          <Field
            name="password"
            handleForm={this.handleChangeInput}
            placeholder="Enter your password"
            type="password"
          />
          <Text>{this.state.errors.password}</Text>
          {wrongPassword && (
            <Text style={styles.error}>You entered wrong password</Text>
          )}
          <View style={styles.buttonContainer}>
            <Button
              styleName="button"
              styleTextName="buttonText"
              label="Login"
              onPressHandler={this.isCredentialsCorrect}
            />
          </View>
        </View>
      </View>
    );
  }
}
