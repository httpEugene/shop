import {
  FETCH_SUCCESS,
  FETCH_FAILED,
  FETCH_REQUEST,
} from '../../../config/request-statuses';

export default (state = null, action) => {
  if (action.type === FETCH_REQUEST) {
    return {
      productsList: null,
      error: null,
      isFetching: true,
    };
  }

  if (action.type === FETCH_SUCCESS) {
    return {
      productsList: action.payload,
      error: null,
      isFetching: false,
    };
  }

  if (action.type === FETCH_FAILED) {
    return {
      productsList: null,
      error: action.payload,
      isFetching: false,
    };
  }

  return state;
};
