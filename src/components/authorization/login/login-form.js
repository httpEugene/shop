import React, { PureComponent } from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

import Field from '../../field';
import Button from '../../button';
import styles from './styles';
import login from './actions/login';

import { isEmail } from '../../../common/services/validator';

const logo = require('../../../images/logo.png');

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


  checkEmailValue = () => {
    return this.state.username !== 'test@gmail.com';
  };

  checkPassword = () => {
    return this.state.password !== 'test';
  };

  isCredentialsCorrect = () => {
    this.setState({
      errors: {
        wrongEmailFormat: !isEmail(this.state.username),
        wrongEmailValue: this.checkEmailValue(),
        wrongPassword: this.checkPassword(),
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
        <Image
          style={styles.logo}
          source={logo}
        />
        <View style={styles.formWrapper}>
          <Field
            name="username"
            onChangeHandler={this.onChangeHandler}
            handleForm={this.handleChangeInput}
            placeholder="Enter your login"
            type="text"
          />
          {this.state.errors.wrongEmailFormat && (
            <Text style={styles.error}>
              You entered not valid email address
            </Text>
          )}
          {this.state.errors.wrongEmailValue && (
            <Text style={styles.error}>You entered wrong email</Text>
          )}
          <Field
            name="password"
            handleForm={this.handleChangeInput}
            placeholder="Enter your password"
            type="password"
          />
          <Text>{this.state.errors.password}</Text>
          {this.state.errors.wrongPassword && (
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
