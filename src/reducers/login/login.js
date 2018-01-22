import { LOGIN_SUCCESS, LOGIN_FAILED } from '../../actions/actions';

const initState = null;

export default (state = initState, action) => {
  if (action.type === LOGIN_SUCCESS) {
    return {
      name: action.payload.name,
      email: action.payload.email || 'test@gmail.com',
      isLogged: true,
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
