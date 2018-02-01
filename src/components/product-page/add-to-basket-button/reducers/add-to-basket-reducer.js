export default (state = null, action) => {
  return {
    basketCount: action.type === 'ADD_TO_BASKET'
      ? state.basketCount + 1
      : 0,
  };
};
