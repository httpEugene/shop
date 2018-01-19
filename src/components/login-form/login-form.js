import React, { PureComponent } from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Field from '../field';
import Button from '../button';
import styles from './styles';
import {validate} from '../../helpers/validation';
import md5 from 'md5';
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

        constructor (props) {
            super(props);

            this.state = {
                username: '',
                password: '',
                errors: ''
            };
        }

        handleSubmit = (e) => {
                e.preventDefault();

                if(Object.keys(validate(this.state)).length !== 0) return;

                const data = {
                    username: this.state.username,
                    password: md5(this.state.password)
                };

                this.props.loginUser(data);
            }

        handleForm = (e) => {
            this.setState({
                [e.target.name]: e.target.value
            });

            this.validateForm();
        }

        validateForm = () => {
            validate(this.state);

            console.log('Validation...', this.state);

            this.setState({
                errors: validate(this.state)
            })
        }

          render() {
            return (
              <View style={styles.container}>
                <View>
                  <View style={styles.fieldContainer}>
                  <Text style={styles.login}>Login</Text>
                    <Field onChangeHandler={this.onChangeHandler} handleForm = { this.handleForm } placeholder="Enter your login" />
                    <Text>{this.state.errors.username}</Text>
          
                      <Text style={styles.login}>Password</Text>

                      <Field handleForm={(e) => this.handleForm(e)} placeholder="Enter your password" type="password" />
                      <Text>{this.state.errors.password}</Text>
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
