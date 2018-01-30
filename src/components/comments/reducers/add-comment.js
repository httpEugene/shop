import {
  ADD_COMMENT_FETCH_REQUEST,
  ADD_COMMENT_FETCH_SUCCESS,
  ADD_COMMENT_FETCH_FAILED,
} from '../actions';

const initState = null;

export default (state = initState, action) => {
  if (action.type === ADD_COMMENT_FETCH_REQUEST) {
    return {
      completed: false,
      isFetching: true,
    };
  }

  if (action.type === ADD_COMMENT_FETCH_SUCCESS) {
    return {
      completed: true,
      isFetching: false,
    };
  }

  if (action.type === ADD_COMMENT_FETCH_FAILED) {
    return {
      completed: false,
      isFetching: false,
    };
  }

  return state;
};
