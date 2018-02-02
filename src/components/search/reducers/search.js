import {
  FILTER_ALL,
  FILTER_BY_NAME,
} from '../actions';

const initialState = {
  filterType: FILTER_ALL,
};

export default (state = initialState, action) => {
  if (action.type === FILTER_BY_NAME) {
    return {
      filterProp: 'title',
      searchKey: action.payload,
    };
  }
  return state;
};
