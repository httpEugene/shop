import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import {
  DELIVERY_DETAILS_FAILED,
  DELIVERY_DETAILS_SUCCESS,
  DELIVERY_DETAILS_REQUEST,
} from '../delivery-statuses';

import {
  deliveryDetailsSuccess,
  deliveryDetailsFailed,
  deliveryDetailsRequest,
  fetchDeliveryDetails,
} from './delivery-details';

describe('Delivery details actions', () => {
  it('Should return action on delivery details success', () => {
    const data = 'Some data';

    const expectedAction = {
      type: DELIVERY_DETAILS_SUCCESS,
      payload: data,
      isFetching: false,
    };

    expect(deliveryDetailsSuccess(data)).toEqual(expectedAction);
  });

  it('Should return action on delivery details fail', () => {
    const error = 'Any error';

    const expectedAction = {
      type: DELIVERY_DETAILS_FAILED,
      payload: error,
      isFetching: false,
    };

    expect(deliveryDetailsFailed(error)).toEqual(expectedAction);
  });

  it('Should return action on delivery details request', () => {
    const expectedAction = {
      type: DELIVERY_DETAILS_REQUEST,
      isFetching: true,
    };

    expect(deliveryDetailsRequest()).toEqual(expectedAction);
  });
});

describe('Delivery details async action', () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  const deliveryDetailsUrl = 'http://private-880ca-test12906.apiary-mock.com/delivery-details/1';

  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('Should update state with success status of request', () => {
    fetchMock.getOnce(deliveryDetailsUrl, {
      body: [{ date: '2018-01-25' }],
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      {
        type: DELIVERY_DETAILS_REQUEST,
        isFetching: true,
      },
      {
        type: DELIVERY_DETAILS_SUCCESS,
        isFetching: false,
        payload: [{ date: '2018-01-25' }],
      },
    ];
    const store = mockStore({ deliveryDetails: [] });

    return store.dispatch(fetchDeliveryDetails()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
