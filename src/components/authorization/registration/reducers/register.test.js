import reducer from './index';
import { REGISTER_SUCCESS, REGISTER_FAILED } from '../../authorization-statuses';

describe('Register reducer', () => {
  test('should set user data after register', () => {
    const initState = null;

    const user = {
      name: 'Dima',
      email: 'dmitry@gmail.com',
    };
    const expectedState = {
      email: user.email,
      name: user.name,
    };

    expect(reducer(initState, { type: REGISTER_SUCCESS, payload: user })).toEqual(expectedState);
  });

  test('should set error if register is failed', () => {
    const initState = null;

    const error = 'Some error during fetch from server';
    const expectedData = {
      mentor: null,
      error,
    };

    expect(reducer(initState, { type: REGISTER_FAILED, payload: error })).toEqual(expectedData);
  });
});
