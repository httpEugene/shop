import { FILTER_ALL } from './actions';

export default function getFilteredProducts(products, searchFilter) {
  const { filterProp, searchKey, filterType } = searchFilter;

  if (filterType === FILTER_ALL) return products;

  return products.filter(product => product[filterProp].includes(searchKey));
}
