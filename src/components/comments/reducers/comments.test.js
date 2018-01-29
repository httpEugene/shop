import {
  COMMENTS_FETCH_REQUEST,
  COMMENTS_FETCH_SUCCESS,
  COMMENTS_FETCH_FAILED,
} from '../actions';

import reducer from './comments';

const initState = null;

describe('Comments reducer', () => {
  it('Should run request', () => {
    const expectedResult = {
      comments: null,
      isFetching: true,
    };

    expect(reducer(initState, { type: COMMENTS_FETCH_REQUEST })).toEqual(expectedResult);
  });

  it('Should show success state if everything is ok', () => {
    const someData = [{ any: 'any' }];
    const action = {
      payload: someData,
      type: COMMENTS_FETCH_SUCCESS,
    };
    const expectedResult = {
      comments: someData,
      isFetching: false,
      error: null,
    };

    expect(reducer(initState, action)).toEqual(expectedResult);
  });

  it('Should show error state if something is wrong', () => {
    const error = 'some error';
    const action = {
      payload: error,
      type: COMMENTS_FETCH_FAILED,
    };
    const expectedResult = {
      error: action.payload,
      isFetching: false,
      comments: null,
    };

    expect(reducer(initState, action)).toEqual(expectedResult);
  });

  it('Should return default state if action is unknown', () => {
    expect(reducer(initState, { type: 'ANY UNKNOWN TYPE' })).toBe(initState);
  });
});
