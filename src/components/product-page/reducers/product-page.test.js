import {
  PRODUCT_FETCH_SUCCESS,
  PRODUCT_FETCH_FAILED,
  PRODUCT_FETCH_REQUEST,
} from '../product-statuses';

import productReducer from './product-page';

const initState = null;

describe('Product reducer', () => {
  it('Should run request', () => {
    const expectedResult = {
      product: null,
      isFetching: true,
      error: null,
    };

    expect(productReducer(initState, { type: PRODUCT_FETCH_REQUEST })).toEqual(expectedResult);
  });

  it('Should show success state if everything is ok', () => {
    const someData = { any: 'any' };
    const action = {
      payload: someData,
      type: PRODUCT_FETCH_SUCCESS,
    };
    const expectedResult = {
      product: someData,
      isFetching: false,
      error: null,
    };

    expect(productReducer(initState, action)).toEqual(expectedResult);
  });

  it('Should show error state if something is wrong', () => {
    const error = 'some error';
    const action = {
      payload: error,
      type: PRODUCT_FETCH_FAILED,
    };
    const expectedResult = {
      error: action.payload,
      isFetching: false,
      product: null,
    };

    expect(productReducer(initState, action)).toEqual(expectedResult);
  });

  it('Should return default state if action is unknown', () => {
    expect(productReducer(initState, { type: 'UNKNOWN' })).toBe(initState);
  });
});
