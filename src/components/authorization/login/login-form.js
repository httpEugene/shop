import React, { PureComponent } from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

import Field from '../../field';
import Button from '../../button';
import FaceBookLogin from './facebook-login';
import styles from './styles';
import login from './actions/login';

import { isEmail } from '../../../common/services/validator';

const logo = require('../../../images/logo.png');

function mapStateToProps(state) {
  return {
    user: state.user,
  };
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
    user: PropTypes.shape({
      email: PropTypes.string,
      name: PropTypes.string,
      isLogged: PropTypes.boolean,
    }),
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

  componentWillReceiveProps(nextProps) {
    if (!nextProps.user || !nextProps.user.isLogged) return;

    Actions.main();
  }

  checkEmailValue = () => {
    return this.state.username.toLocaleLowerCase() !== 'test@gmail.com';
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
    }, this.authorizeUser);
  };

  authorizeUser = () => {
    const errors = this.state.errors;
    const errorKeys = Object.keys(errors);
    let error = false;

    errorKeys.some((key) => {
      if (errors[key]) {
        error = true;
        return true;
      }

      return false;
    });

    if (!error) {
      Actions.main();
    }
  };

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
          <FaceBookLogin onLogin={this.props.onLogin} />
        </View>
      </View>
    );
  }
}
