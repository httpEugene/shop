import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILED,
} from '../actions/fetch-map-data';

const initState = null;

export default (state = initState, action) => {
  if (action.type === FETCH_REQUEST) {
    return {
      shopsData: null,
      error: null,
      isFetching: true,
    };
  }

  if (action.type === FETCH_SUCCESS) {
    return {
      shopsData: action.payload,
      isFetching: false,
      error: null,
    };
  }

  if (action.type === FETCH_FAILED) {
    return {
      error: action.payload,
      isFetching: false,
      shopsData: null,
    };
  }

  return state;
};
