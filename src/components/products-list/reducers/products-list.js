import {
  PRODUCT_LIST_FETCH_SUCCESS,
  PRODUCT_LIST_FETCH_FAILED,
  PRODUCT_LIST_FETCH_REQUEST,
} from '../product-list-statuses';

export default (state = null, action) => {
  if (action.type === PRODUCT_LIST_FETCH_REQUEST) {
    return {
      productsList: null,
      error: null,
      isFetching: true,
    };
  }

  if (action.type === PRODUCT_LIST_FETCH_SUCCESS) {
    return {
      productsList: action.payload,
      error: null,
      isFetching: false,
    };
  }

  if (action.type === PRODUCT_LIST_FETCH_FAILED) {
    return {
      productsList: null,
      error: action.payload,
      isFetching: false,
    };
  }

  return state;
};
