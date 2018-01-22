import { LOGIN_SUCCESS, LOGIN_FAILED } from '../../actions/actions';

const initState = null;

export default (state = initState, action) => {
  if (action.type === LOGIN_SUCCESS) {
    return {
      name: action.payload.name,
      email: action.payload.email,
      isLogged: true,
      status: 200,
    };
  }

  if (action.type === LOGIN_FAILED) {
    return action.payload;
  }

  return state;
};
