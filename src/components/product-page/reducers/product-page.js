import {
  PRODUCT_FETCH_SUCCESS,
  PRODUCT_FETCH_FAILED,
  PRODUCT_FETCH_REQUEST,
} from '../product-statuses';

const initState = null;

export default (state = initState, action) => {
  switch (action.type) {
    case PRODUCT_FETCH_REQUEST:
      return {
        product: null,
        error: null,
        isFetching: true,
      };
    case PRODUCT_FETCH_SUCCESS:
      return {
        product: action.payload,
        isFetching: false,
        error: null,
      };
    case PRODUCT_FETCH_FAILED:
      return {
        error: action.payload,
        product: null,
        isFetching: false,
      };
    default:
      return state;
  }
};
