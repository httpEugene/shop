import reducer from './reducers';
import { GET_ORDERS } from '../constants';

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it('should handle add data', () => {
    expect(reducer([], {
      type: GET_ORDERS,
      payload: [
        {
          id: '69422655',
          items: 1,
          summ: '1 055',
        },
      ],
    })).toEqual([
      {
        id: '69422655',
        items: 1,
        summ: '1 055',
      },
    ]);
  });
});
