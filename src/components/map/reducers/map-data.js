import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILED,
} from '../actions/fetch-map-data';

const initState = null;

export default (state = initState, action) => {
  if (action.type === FETCH_REQUEST) {
    return {
      shops: null,
      error: null,
      isFetching: true,
    };
  }

  if (action.type === FETCH_SUCCESS) {
    return {
      shops: action.payload,
      isFetching: false,
      error: null,
    };
  }

  if (action.type === FETCH_FAILED) {
    return {
      error: action.payload,
      isFetching: false,
      shops: null,
    };
  }

  return state;
};
