import deliveryDetailsReducer from './index';

import {
  DELIVERY_DETAILS_FETCH_SUCCESS,
  DELIVERY_DETAILS_FETCH_FAILED,
  DELIVERY_DETAILS_FETCH_REQUEST
} from '../delivery-statuses';

const initState = null;

describe('Delivery details reducer', () => {
  it('Should run request', () => {
    const expectedResult = {
      deliveryDetails: null,
      isFetching: true,
      error: null,
    };

    expect(deliveryDetailsReducer(initState, { type: DELIVERY_DETAILS_FETCH_REQUEST })).toEqual(expectedResult);
  });

  it('Should set delivery details to state if everything is ok', () => {
    const action = {
      type: DELIVERY_DETAILS_FETCH_SUCCESS,
      payload: [{
        date: '2018-01-25',
        data: 'some data',
      }],
    };

    const expectedDeliveryDetails = {
      deliveryDetails: [{
        date: '2018-01-25',
        data: 'some data',
      }],
      error: null,
      isFetching: false,
    };

    expect(deliveryDetailsReducer(initState, action)).toEqual(expectedDeliveryDetails);
  });

  it('Should set error data to state if something wrong', () => {
    const action = {
      type: DELIVERY_DETAILS_FETCH_FAILED,
      payload: {
        error: 'Any error',
      },
    };

    const expectedDeliveryDetails = {
      deliveryDetails: null,
      error: {
        error: 'Any error',
      },
      isFetching: false,
    };

    expect(deliveryDetailsReducer(initState, action)).toEqual(expectedDeliveryDetails);
  });

  it('Should return default state if action type is not recognized', () => {
    const action = {
      type: 'UNKNOWN',
    };

    const expectedDeliveryDetails = initState;

    expect(deliveryDetailsReducer(initState, action)).toEqual(expectedDeliveryDetails);
  });
});
