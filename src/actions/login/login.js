import config from '../../config';
import { LOGIN_SUCCESS, LOGIN_FAILED, LOGIN_REQUEST } from '../actions';

const loginSuccess = data => ({
  type: LOGIN_SUCCESS,
  payload: data,
  isFetching: false,
});

const loginFailed = error => ({
  type: LOGIN_FAILED,
  payload: error,
  isFetching: false,
});

const loginRequest = () => ({
  type: LOGIN_REQUEST,
  isFetching: true,
});

export const login = data => dispatch => {
  dispatch(loginRequest());

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  };

  return fetch(config.loginUrl, options)
    .then(response => response.json())
    .then(response => dispatch(loginSuccess(response)))
    .catch(error => dispatch(loginFailed(error)));
};

export default login;
