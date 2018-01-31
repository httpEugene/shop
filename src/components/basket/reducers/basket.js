import {
  BASKET_FETCH_REQUEST,
  BASKET_FETCH_SUCCESS,
  BASKET_FETCH_FAILED,
} from '../actions';

const initState = null;

export default (state = initState, action) => {
  if (action.type === BASKET_FETCH_REQUEST) {
    return {
      data: null,
      isFetching: true,
    };
  }

  if (action.type === BASKET_FETCH_SUCCESS) {
    return {
      data: action.payload,
      isFetching: false,
      error: null,
    };
  }

  if (action.type === BASKET_FETCH_FAILED) {
    return {
      error: action.payload,
      isFetching: false,
      data: null,
    };
  }

  return state;
};
