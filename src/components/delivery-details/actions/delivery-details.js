import {
  DELIVERY_DETAILS_FAILED,
  DELIVERY_DETAILS_SUCCESS,
  DELIVERY_DETAILS_REQUEST,
} from '../delivery-statuses';

const deliveryDetailsUrl = 'http://private-880ca-test12906.apiary-mock.com/delivery-details/1';

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
  return fetch(deliveryDetailsUrl)
    .then(response => response.json())
    .then(response => dispatch(deliveryDetailsSuccess(response)))
    .catch(error => dispatch(deliveryDetailsFailed(error)));
};

export default fetchDeliveryDetails;
