import ApiService from '../../../common/services/api-service';

const deliveryDetailsUrl = 'http://private-880ca-test12906.apiary-mock.com/delivery-details/';

export const deliveryDetails = id => dispatch =>
  ApiService.get(deliveryDetailsUrl + id, 'DELIVERY_DETAILS', dispatch);

export default deliveryDetails;
