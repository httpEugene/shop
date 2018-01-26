import ApiService from '../../../common/services/api-service';

export const productList = () => dispatch => ApiService.get('https://private-bf0eb-test12906.apiary-mock.com/products-list', dispatch);

export default productList;
