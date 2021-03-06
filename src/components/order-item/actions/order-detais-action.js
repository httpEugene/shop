import { GET_ORDER_DETAILS, LOADING_FAILED } from '../constants';

const getOrderDetailsUrl =
  'https://private-bf0eb-test12906.apiary-mock.com/order';

export const getOrderDetails = (data) => {
  return {
    type: GET_ORDER_DETAILS,
    data,
  };
};

export const loadingFailed = (payload) => {
  return {
    type: LOADING_FAILED,
    payload,
  };
};

export const loadOrderDetails = (id) => {
  return (dispatch) => {
    return fetch(`${getOrderDetailsUrl}/${id}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => dispatch(getOrderDetails(data)))
      .catch(err => dispatch(loadingFailed(err)));
  };
};
