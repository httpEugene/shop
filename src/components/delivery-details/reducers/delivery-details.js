import {
  DELIVERY_DETAILS_FETCH_SUCCESS,
  DELIVERY_DETAILS_FETCH_FAILED,
  DELIVERY_DETAILS_FETCH_REQUEST,
} from '../delivery-statuses';

const initState = null;

export default (state = initState, { type, payload }) => {
  switch (type) {
    case DELIVERY_DETAILS_FETCH_REQUEST:
      return {
        deliveryDetails: null,
        isFetching: true,
        error: null,
      };
    case DELIVERY_DETAILS_FETCH_SUCCESS:
      return {
        deliveryDetails: payload,
        isFetching: false,
        error: null,
      };
    case DELIVERY_DETAILS_FETCH_FAILED:
      return {
        deliveryDetails: null,
        isFetching: false,
        error: payload,
      };
    default:
      return state;
  }
};
