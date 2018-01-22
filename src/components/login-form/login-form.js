import React, { PureComponent } from 'react';
import md5 from 'md5';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import Field from '../field';
import Button from '../button';
import styles from './styles';
import { validate } from '../../helpers/validation';
import login from '../../actions/login';

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

  componentWillReceiveProps(nextProps) {
    const { user } = nextProps;

    /*  const currentUser = {
      username: user.username,
      id: user._id,
    }; */

    if (user.success) {
      // AsyncStorage.setItem(('user', JSON.stringify(currentUser));
      // AsyncStorage.setItem(('x-access-token', user.token);

      Actions.main();
    }
  }

  handleSubmit = e => {
    e.preventDefault();

    if (Object.keys(validate(this.state)).length !== 0) return;

    const data = {
      username: this.state.username,
      password: md5(this.state.password),
    };

    this.props.loginUser(data);
  };

  handleForm = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });

    this.validateForm();
  };

  validateForm = () => {
    validate(this.state);

    this.setState({
      errors: validate(this.state),
    });
  };

  handleFormSubmit = () => {
    this.props.onLogin();
    Actions.main();
  };

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
          </View>
        </View>
      </View>
    );
  }
}
