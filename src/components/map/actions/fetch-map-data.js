import config from '../../../config';

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILED = 'FETCH_FAILED';

export const fetchSuccess = data => ({
  type: FETCH_SUCCESS,
  payload: data,
  isFetching: false,
});

export const fetchFailed = error => ({
  type: FETCH_FAILED,
  payload: error,
  isFetching: false,
});

export const fetchRequest = () => ({
  type: FETCH_REQUEST,
  isFetching: true,
});

export const fetchMapData = () => (dispatch) => {
  dispatch(fetchRequest());

  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return fetch(config.shopsDataUrl, options)
    .then(response => response.json())
    .then(response => dispatch(fetchSuccess(response)))
    .catch(error => dispatch(fetchFailed(error)));
};

export default fetchMapData;
