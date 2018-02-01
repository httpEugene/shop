import { GET_ORDER } from '../constants';

const initialState = {};

export default (state = initialState, action) => {
  console.log('  redicer ', action);
  switch (action.type) {
    case GET_ORDER:
      console.log('  redicer1 ', { ...state, id: action.id });
      return { ...state, id: action.id };

    default:
      return state;
  }
};
