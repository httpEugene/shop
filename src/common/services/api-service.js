import {
  FETCH_FAILED,
  FETCH_SUCCESS,
  FETCH_REQUEST,
} from '../../config/request-statuses';

const successHandler = (data, type) => ({
  type: `${type}_${FETCH_SUCCESS}`,
  payload: data,
  isFetching: false,
});

const failureHandler = (error, type) => ({
  type: `${type}_${FETCH_FAILED}`,
  payload: error,
  isFetching: false,
});

const requestHandler = type => ({
  type: `${type}_${FETCH_REQUEST}`,
  isFetching: true,
});

const fetchAndDispatchData = (url, options, type, dispatch) => {
  return fetch(url, options)
    .then(response => response.json())
    .then(response => dispatch(successHandler(response)))
    .catch(error => dispatch(failureHandler(error)));
};

const get = (url, type, dispatch) => {
  dispatch(requestHandler(type));
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return fetchAndDispatchData(url, options, dispatch);
};

const post = (url, data, type, dispatch) => {
  dispatch(requestHandler(type));
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  return fetchAndDispatchData(url, options, dispatch);
};

export default { post, get };
