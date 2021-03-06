import ApiService from '../../../common/services/api-service';

const productUrl = 'https://private-bf0eb-test12906.apiary-mock.com/product/';

export const product = id => dispatch =>
  ApiService.get(productUrl + id, 'PRODUCT', dispatch);

export default product;
