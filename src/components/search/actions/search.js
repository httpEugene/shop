import { FILTER_BY_NAME, FILTER_BY_CATEGORY } from '../actions';

export const searchProductsByName = name => ({
  type: FILTER_BY_NAME,
  payload: name,
});

export const searchProductsByCategory = category => ({
  type: FILTER_BY_CATEGORY,
  payload: category,
});
