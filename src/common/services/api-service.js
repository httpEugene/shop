import {
  FETCH_FAILED,
  FETCH_SUCCESS,
  FETCH_REQUEST,
} from '../../config/request-statuses';

const successHandler = data => ({
  type: FETCH_SUCCESS,
  payload: data,
  isFetching: false,
});

const failureHandler = error => ({
  type: FETCH_FAILED,
  payload: error,
  isFetching: false,
});

const requestHandler = () => ({
  type: FETCH_REQUEST,
  isFetching: true,
});

const fetchAndDispatchData = (url, options, dispatch) => {
  return fetch(url, options)
    .then(response => response.json())
    .then(response => dispatch(successHandler(response)))
    .catch(error => dispatch(failureHandler(error)));
};

const get = (url, dispatch) => {
  requestHandler(dispatch);
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return fetchAndDispatchData(url, options, dispatch);
};

const post = (url, data, dispatch) => {
  requestHandler(dispatch);
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
