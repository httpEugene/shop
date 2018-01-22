import loginReducer from './login';
import { LOGIN_SUCCESS, LOGIN_FAILED } from '../../actions/actions';

const initState = null;

describe('Login reducer', () => {
  test('Should set user to state if everything ok', () => {
    const action = {
      type: LOGIN_SUCCESS,
      payload: {
        name: 'any name',
        email: 'any email',
      },
    };

    const expectedUser = {
      name: 'any name',
      email: 'any email',
      isLogged: true,
      status: 200,
    };

    expect(loginReducer(initState, action)).toEqual(expectedUser);
  });

  test('Should set error data to state if something wrong', () => {
    const action = {
      type: LOGIN_FAILED,
      payload: {
        error: 'Any error',
      },
    };

    const expectedUser = { error: 'Any error' };

    expect(loginReducer(initState, action)).toEqual(expectedUser);
  });

  test('Should return default state if action type is not recognized', () => {
    const action = {
      type: 'UNKNOWN',
    };

    const expectedUser = initState;

    expect(loginReducer(initState, action)).toEqual(expectedUser);
  });
});
