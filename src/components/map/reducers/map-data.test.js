import mapDataReducer from './map-data';
import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILED,
} from '../actions/fetch-map-data';

const initState = null;

describe('Login reducer', () => {
  it('Should set map data to state if everything ok', () => {
    const action = {
      type: FETCH_SUCCESS,
      payload: 'any data',
    };

    const expectedResult = {
      shopData: 'any data',
      isFetching: false,
      error: null,
    };

    expect(mapDataReducer(initState, action)).toEqual(expectedResult);
  });

  it('Should return is fetching process status', () => {
    const action = {
      type: FETCH_REQUEST,
    };

    const expectedResult = {
      shopData: null,
      error: null,
      isFetching: true,
    };

    expect(mapDataReducer(initState, action)).toEqual(expectedResult);
  });

  it('Should return error if server answers with error', () => {
    const action = {
      type: FETCH_FAILED,
      payload: 'Any error',
    };

    const expectedResult = {
      error: 'Any error',
      isFetching: false,
      shopData: null,
    };

    expect(mapDataReducer(initState, action)).toEqual(expectedResult);
  });

  it('Should return default state if action type is not recognized', () => {
    const action = {
      type: 'UNKNOWN',
    };

    const expectedUser = initState;

    expect(mapDataReducer(initState, action)).toEqual(expectedUser);
  });
});
