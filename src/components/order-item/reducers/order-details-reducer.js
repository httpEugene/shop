import { GET_ORDER_DETAILS } from '../constants';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDER_DETAILS:
      return { ...state, ...action.data };

    default:
      return state;
  }
};

