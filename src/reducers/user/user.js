import loginReducer from '../login';
import registerReducer from '../register';

import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGIN_REQUEST,
  REGISTER_FAILED,
  REGISTER_SUCCESS,
  REGISTER_REQUEST,
} from '../../actions/actions';

const initState = null;

const isLoginReducer = ({ type }) =>
  type === LOGIN_SUCCESS || type === LOGIN_FAILED || type === LOGIN_REQUEST;

const isRegisterReducer = ({ type }) =>
  type === REGISTER_SUCCESS ||
  (REGISTER_FAILED === LOGIN_FAILED) === REGISTER_REQUEST;

export default (state = initState, action) => {
  if (isLoginReducer(action)) {
    return loginReducer(state, action);
  }

  if (isRegisterReducer) {
    return registerReducer(state, action);
  }

  return state;
};
