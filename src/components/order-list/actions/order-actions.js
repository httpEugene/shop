import { GET_ORDERS, LOADING_FAILED, GET_ORDER } from '../constants';

//const getOrdersUrl = 'https://screwfix-shop-back.herokuapp.com/api/orders';
const getOrdersUrl = 'https://screwfix-shop-back.herokuapp.com/api/orders';

export const getOrders = (data) => {
  console.log('getOrders.......', data);
  return {
    type: GET_ORDERS,
    payload: data,
  };
};

export const loadingFailed = (payload) => {
  console.log('ERROR.......', payload);
  return {
    type: LOADING_FAILED,
    payload,
  };
};

export const getOrderDetails = (id) => {
  console.log('getOrderDetails.......', id);
  return {
    type: GET_ORDER,
    id,
  };
};

export const loadOrders = (accessToken) => {
  console.log('loadOrders.......', accessToken);
  return (dispatch) => {
    return fetch(getOrdersUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then(data => dispatch(getOrders(data)))
      .catch(err => dispatch(loadingFailed(err)));
  };
};
