import reducer from './reducers';
import { GET_ORDERS } from '../constants';

const mockData = [
  {
    id: '69422655',
    items: 1,
    summ: '1 055',
  },
];

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it('should handle add data', () => {
    expect(reducer([], {
      type: GET_ORDERS,
      payload: [...mockData],
    })).toEqual([...mockData]);
  });
});
