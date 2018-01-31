import fetchProductsListAction from './products-list';
import ApiService from '../../../common/services/api-service';

jest.mock('../../../common/services/api-service', () => ({
  get: jest.fn(),
}));

describe('Fetch map data actions', () => {
  it('should make call to BE in order to receive products list and dispatch them', () => {
    const dispatch = jest.fn();
    const makeAction = fetchProductsListAction();
    makeAction(dispatch);

    expect(ApiService.get).toHaveBeenCalledWith('https://private-bf0eb-test12906.apiary-mock.com/products-list', 'PRODUCT_LIST', dispatch);
  });
});
