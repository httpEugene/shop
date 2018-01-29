import {
  ADD_COMMENT_FETCH_REQUEST,
  ADD_COMMENT_FETCH_SUCCESS,
  ADD_COMMENT_FETCH_FAILED,
} from '../actions';

import reducer from './add-comment';

const initState = null;

describe('Add comment reducer', () => {
  it('Should run request', () => {
    const expectedResult = {
      completed: false,
      isFetching: true,
    };

    expect(reducer(initState, { type: ADD_COMMENT_FETCH_REQUEST })).toEqual(expectedResult);
  });

  it('Should show success state if everything is ok', () => {
    const expectedResult = {
      completed: true,
      isFetching: false,
    };

    expect(reducer(initState, { type: ADD_COMMENT_FETCH_SUCCESS })).toEqual(expectedResult);
  });

  it('Should show error state if something is wrong', () => {
    const expectedResult = {
      completed: false,
      isFetching: false,
    };

    expect(reducer(initState, { type: ADD_COMMENT_FETCH_FAILED })).toEqual(expectedResult);
  });

  it('Should return default state if action is unknown', () => {
    expect(reducer(initState, { type: 'ANY UNKNOWN TYPE' })).toBe(initState);
  });
});
