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
    onRegisterSubmit() {
      // dispatch(registerRequestAction(data));
    },
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
    })
  };

  state = {
    username: '',
    password: '',
    errors: '',
  };

  handleFormSubmit = () => {
    Actions.main();
  };

  showUiExamples = () => {
    Actions.UiExamples();
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.fieldContainer}>
            <Text style={styles.login}>Login</Text>
            <Field
              onChangeHandler={this.onChangeHandler}
              handleForm={this.handleForm}
              placeholder="Enter your login"
              type="text"
            />
            <Text>{this.state.errors.username}</Text>
            <Field
              handleForm={e => this.handleForm(e)}
              placeholder="Enter your password"
              type="password"
            />
            <Text>{this.state.errors.password}</Text>
          </View>

          <View style={styles.buttonContainer}>
            <Button
              styleName="button"
              styleTextName="buttonText"
              label="Login"
              onPressHandler={this.handleFormSubmit}
            />
            <Button
              styleName="button"
              styleTextName="buttonText"
              label="UI EXAMPLES"
              onPressHandler={this.showUiExamples}
            />
          </View>
        </View>
      </View>
    );
  }
}
