import config from '../../../config';

import {
  DELIVERY_DETAILS_FAILED,
  DELIVERY_DETAILS_SUCCESS,
  DELIVERY_DETAILS_REQUEST,
} from '../delivery-statuses';

export const deliveryDetailsSuccess = (data) => {
  return {
    type: DELIVERY_DETAILS_SUCCESS,
    payload: data,
    isFetching: false,
  };
};

export const deliveryDetailsFailed = (error) => {
  return {
    type: DELIVERY_DETAILS_FAILED,
    payload: error,
    isFetching: false,
  };
};

export const deliveryDetailsRequest = () => ({
  type: DELIVERY_DETAILS_REQUEST,
  isFetching: true,
});

export const fetchDeliveryDetails = () => (dispatch) => {
  dispatch(deliveryDetailsRequest());
  return fetch(config.deliveryDetailsUrl)
    .then(response => response.json())
    .then(response => dispatch(deliveryDetailsSuccess(response)))
    .catch(error => dispatch(deliveryDetailsFailed(error)));
};

export default fetchDeliveryDetails;