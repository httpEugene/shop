import { GET_ORDERS, LOADING_FAILED } from '../constants';

const getOrdersUrl = 'https://private-bf0eb-test12906.apiary-mock.com/orders';

export const getOrders = (data) => {
  return {
    type: GET_ORDERS,
    payload: data,
  };
};

export const loadingFailed = (payload) => {
  return {
    type: LOADING_FAILED,
    payload,
  };
};

export const loadOrders = () => {
  return (dispatch) => {
    return fetch(getOrdersUrl, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then((data) => {
        dispatch(getOrders(data));
      })
      .catch(err => dispatch(loadingFailed(err)));
  };
};
