import ApiService from '../../../common/services/api-service';
import fetchProductAction from './product-page';

describe('Product page actions', () => {
  it('Should check get service was called with correct URL', () => {
    ApiService.get = jest.fn();
    const productUrl = 'https://private-bf0eb-test12906.apiary-mock.com/product/';
    const id = '5';
    const dispatch = jest.fn();
    const makeAction = fetchProductAction(id);
    makeAction(dispatch);
    expect(ApiService.get).toHaveBeenCalledWith(productUrl + id, 'PRODUCT', dispatch);
  });
});
