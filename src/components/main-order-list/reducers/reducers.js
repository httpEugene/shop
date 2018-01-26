import GET_ORDERS from '../constants';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDERS:
      return [...initialState, ...action.payload];

    default:
      return state;
  }
};

