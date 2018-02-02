import {
  FILTER_BY_NAME,
  FILTER_BY_CATEGORY,
  searchProductsByName,
  searchProductsByCategory,
} from './index';

describe('Search actions', () => {
  it('Should return filter by name data', () => {
    const name = 'any name';
    const expectedData = {
      type: FILTER_BY_NAME,
      payload: name,
    };

    expect(searchProductsByName(name)).toEqual(expectedData);
  });

  it('Should return filter by category data', () => {
    const category = 'any category';
    const expectedData = {
      type: FILTER_BY_CATEGORY,
      payload: category,
    };

    expect(searchProductsByCategory(category)).toEqual(expectedData);
  });
});
