import productsListReducer from './products-list';
import {
  PRODUCT_LIST_FETCH_SUCCESS,
  PRODUCT_LIST_FETCH_FAILED,
  PRODUCT_LIST_FETCH_REQUEST,
} from '../product-list-statuses';

const initState = null;

describe('Products list reducer', () => {
  it('Should set map data to state if success', () => {
    const action = {
      type: PRODUCT_LIST_FETCH_SUCCESS,
      payload: 'any data',
    };

    const expectedResult = {
      productsList: 'any data',
      isFetching: false,
      error: null,
    };

    expect(productsListReducer(initState, action)).toEqual(expectedResult);
  });

  it('Should return is fetching process status', () => {
    const action = {
      type: PRODUCT_LIST_FETCH_REQUEST,
    };

    const expectedResult = {
      productsList: null,
      error: null,
      isFetching: true,
    };

    expect(productsListReducer(initState, action)).toEqual(expectedResult);
  });

  it('Should return error if server answers with error', () => {
    const action = {
      type: PRODUCT_LIST_FETCH_FAILED,
      payload: 'Any error',
    };

    const expectedResult = {
      error: 'Any error',
      isFetching: false,
      productsList: null,
    };

    expect(productsListReducer(initState, action)).toEqual(expectedResult);
  });

  it('Should return default state if action type is not recognized', () => {
    const action = {
      type: 'UNKNOWN',
    };

    const expectedUser = initState;

    expect(productsListReducer(initState, action)).toEqual(expectedUser);
  });
});
