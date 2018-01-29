import {
  COMMENTS_FETCH_REQUEST,
  COMMENTS_FETCH_SUCCESS,
  COMMENTS_FETCH_FAILED,
} from '../actions';

const initState = null;

export default (state = initState, action) => {
  if (action.type === COMMENTS_FETCH_REQUEST) {
    return {
      comments: null,
      isFetching: true,
    };
  }

  if (action.type === COMMENTS_FETCH_SUCCESS) {
    return {
      comments: action.payload,
      isFetching: false,
      error: null,
    };
  }

  if (action.type === COMMENTS_FETCH_FAILED) {
    return {
      error: action.payload,
      isFetching: false,
      comments: null,
    };
  }

  return state;
};
