import getFilteredProducts from './search-helper';
import { FILTER_BY_NAME, FILTER_ALL } from '../search/actions';

describe('Search helpers', () => {
  const products = [
    {
      title: 'first',
    },
    {
      title: 'second',
    },
    {
      title: 'first product',
    },
  ];

  it('Should return filtered products', () => {
    const searchFilter = {
      filterType: FILTER_BY_NAME,
      searchKey: 'first',
      filterProp: 'title',
    };

    const expectedProducts = [
      {
        title: 'first',
      },
      {
        title: 'first product',
      },
    ];

    expect(getFilteredProducts(products, searchFilter)).toEqual(expectedProducts);
  });

  it('Should return default products', () => {
    const searchFilter = {
      filterType: FILTER_ALL,
    };

    expect(getFilteredProducts(products, searchFilter)).toEqual(products);
  });
});
