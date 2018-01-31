import {
  BASKET_FETCH_REQUEST,
  BASKET_FETCH_SUCCESS,
  BASKET_FETCH_FAILED,
} from '../actions';

import reducer from './basket';

const initState = null;

describe('Basket reducer', () => {
  it('Should run request', () => {
    const expectedResult = {
      data: null,
      isFetching: true,
    };

    expect(reducer(initState, { type: BASKET_FETCH_REQUEST })).toEqual(expectedResult);
  });

  it('Should show success state if everything is ok', () => {
    const someData = [{ any: 'any' }];
    const action = {
      payload: someData,
      type: BASKET_FETCH_SUCCESS,
    };
    const expectedResult = {
      data: someData,
      isFetching: false,
      error: null,
    };

    expect(reducer(initState, action)).toEqual(expectedResult);
  });

  it('Should show error state if something is wrong', () => {
    const error = 'some error';
    const action = {
      payload: error,
      type: BASKET_FETCH_FAILED,
    };
    const expectedResult = {
      error: action.payload,
      isFetching: false,
      data: null,
    };

    expect(reducer(initState, action)).toEqual(expectedResult);
  });

  it('Should return default state if action is unknown', () => {
    expect(reducer(initState, { type: 'ANY UNKNOWN TYPE' })).toBe(initState);
  });
});
