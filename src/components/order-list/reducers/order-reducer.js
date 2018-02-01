import { GET_ORDER } from '../constants';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDER:
      return { ...state, id: action.id };

    default:
      return state;
  }
};
