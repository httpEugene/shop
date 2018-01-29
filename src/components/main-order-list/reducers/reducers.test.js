import reducer from './reducers';
import { GET_ORDERS } from '../constants';
import mockData from '../mock-data';

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
