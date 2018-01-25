import deliveryDetailsReducer from './index';

import { DELIVERY_DETAILS_SUCCESS, DELIVERY_DETAILS_FAILED } from '../delivery-statuses';

const initState = null;

describe('Delivery details reducer', () => {
  test('Should set delivery details to state if everything is ok', () => {
    const action = {
      type: DELIVERY_DETAILS_SUCCESS,
      payload: [{
        date: '2018-01-25',
        data: 'some data',
      }],
    };

    const expectedDeliveryDetails = [{
      date: '2018-01-25',
      data: 'some data',
    }];

    expect(deliveryDetailsReducer(initState, action)).toEqual(expectedDeliveryDetails);
  });

  test('Should set error data to state if something wrong', () => {
    const action = {
      type: DELIVERY_DETAILS_FAILED,
      payload: {
        error: 'Any error',
      },
    };

    const expectedDeliveryDetails = {
      error: 'Any error',
    };

    expect(deliveryDetailsReducer(initState, action)).toEqual(expectedDeliveryDetails);
  });

  test('Should return default state if action type is not recognized', () => {
    const action = {
      type: 'UNKNOWN',
    };

    const expectedDeliveryDetails = initState;

    expect(deliveryDetailsReducer(initState, action)).toEqual(expectedDeliveryDetails);
  });
});
