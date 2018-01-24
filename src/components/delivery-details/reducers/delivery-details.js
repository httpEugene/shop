import {
  DELIVERY_DETAILS_SUCCESS,
  DELIVERY_DETAILS_FAILED,
} from '../delivery-statuses';

const initState = null;

export default (state = initState, { type, payload }) => {
  switch (type) {
    case DELIVERY_DETAILS_SUCCESS:
      return payload;
    case DELIVERY_DETAILS_FAILED:
      return payload;
    default:
      return state;
  }
};
