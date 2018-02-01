import { GET_ORDERS, LOADING_FAILED, GET_ORDER } from '../constants';

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

export const getOrderDetails = (id) => {
  return {
    type: GET_ORDER,
    id,
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
      .then((response) => {
        return response.json();
      })
      .then(data => dispatch(getOrders(data)))
      .catch(err => dispatch(loadingFailed(err)));
  };
};
