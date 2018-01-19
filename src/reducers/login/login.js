import { LOGIN_SUCCESS, LOGIN_FAILED } from '../../actions/actions';

const initState = null;

export default (state = initState, action) => {
  if (action.type === LOGIN_SUCCESS) {
    return {
      email: action.payload.email,
      name: action.payload.name,
      isLogged: action.payload.responseText,
      status: action.payload.status,
    };
  }

  if (action.type === LOGIN_FAILED) {
    return {
      mentor: null,
      error: action.payload,
    };
  }

  return state;
};
