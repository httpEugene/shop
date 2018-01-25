import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILED,
  fetchSuccess,
  fetchFailed,
  fetchRequest,
  fetchMapData,
} from '../actions/fetch-map-data';
import config from '../../../config';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Fetch map data actions', () => {
  it('should return data after success fetching', () => {
    const data = 'any data';
    const expectedData = {
      type: FETCH_SUCCESS,
      isFetching: false,
      payload: data,
    };

    expect(fetchSuccess(data)).toEqual(expectedData);
  });

  it('should return error data after error fetching', () => {
    const error = 'any error';
    const expectedData = {
      type: FETCH_FAILED,
      isFetching: false,
      payload: error,
    };

    expect(fetchFailed(error)).toEqual(expectedData);
  });

  it('should return is fetching process status', () => {
    const expectedData = {
      type: FETCH_REQUEST,
      isFetching: true,
    };

    expect(fetchRequest()).toEqual(expectedData);
  });
});

describe('async actions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('creates success when fetching has been done', () => {
    fetchMock.getOnce(config.shopsDataUrl, {
      headers: { 'content-type': 'application/json' },
      body: { shop: 'some shop' },
    });

    const expectedActions = [
      { type: FETCH_REQUEST, isFetching: true },
      {
        type: FETCH_SUCCESS,
        payload: { shop: 'some shop' },
        isFetching: false,
      },
    ];
    const store = mockStore();

    return store.dispatch(fetchMapData())
      .then(() => expect(store.getActions()).toEqual(expectedActions));
  });
});
