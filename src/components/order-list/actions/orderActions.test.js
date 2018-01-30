import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as actions from './orderActions';
import { GET_ORDERS, LOADING_FAILED } from '../constants';

const getOrdersUrl = 'https://private-bf0eb-test12906.apiary-mock.com/orders';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mockData = [
  {
    id: '69422655',
    items: 1,
    summ: '1 055',
  },
];

describe('actions', () => {
  it('should create an action to add an order ', () => {
    const payload = [...mockData];
    const expectedAction = {
      type: GET_ORDERS,
      payload,
    };
    expect(actions.getOrders(payload)).toEqual(expectedAction);
  });

  it('should create an action on error loading', () => {
    const payload = {
      error: 'Any error',
    };

    const expectedAction = {
      type: LOADING_FAILED,
      payload,
    };
    expect(actions.loadingFailed(payload)).toEqual(expectedAction);
  });
});

describe('async actions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('should retrieve orders list and saves in store', () => {
    fetchMock.getOnce(getOrdersUrl, {
      body: [...mockData],
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      {
        type: GET_ORDERS,
        payload: [...mockData],
      },
    ];

    const store = mockStore([]);

    return store.dispatch(actions.loadOrders()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

