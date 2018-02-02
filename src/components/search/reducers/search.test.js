import {
  FILTER_ALL,
  FILTER_BY_NAME,
} from '../actions';
import reducer from './search';

const initialState = {
  filterType: FILTER_ALL,
};

describe('Search reducer', () => {
  it('Should return default state if action is unknown', () => {
    expect(reducer(initialState, { type: 'UNKNOWN' })).toEqual(initialState);
  });

  it('Should return filter by name state', () => {
    const any = 'any';
    const expectedState = {
      filterProp: 'title',
      searchKey: any,
    };
    expect(reducer(initialState, { type: FILTER_BY_NAME, payload: any })).toEqual(expectedState);
  });
});
