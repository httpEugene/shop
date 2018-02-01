import React, { PureComponent } from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import Field from '../../field';
import Button from '../../button';
import styles from './styles';
import login from './actions/login';

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

function checkCorrectInputData(name, password) {
  return name === 'test' && password === 'test';
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
    errors: '',
  };

  handleFormSubmit = () => {
    if (checkCorrectInputData(this.state.username, this.state.password)) {
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
        <View style={styles.formWrapper}>
          <Field
            name="username"
            onChangeHandler={this.onChangeHandler}
            handleForm={this.handleChangeInput}
            placeholder="Enter your login"
            type="text"
          />
          <Text>{this.state.errors.username}</Text>
          <Field
            name="password"
            handleForm={this.handleChangeInput}
            placeholder="Enter your password"
            type="password"
          />
          <Text>{this.state.errors.password}</Text>

          <View style={styles.buttonContainer}>
            <Button
              styleName="button"
              styleTextName="buttonText"
              label="Login"
              onPressHandler={this.handleFormSubmit}
            />
          </View>
        </View>
      </View>
    );
  }
}
