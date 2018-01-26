import { combineReducers } from 'redux';
import user from './user';
import deliveryDetails from '../../components/delivery-details/reducers';
import shopsData from '../../components/map/reducers';

export default combineReducers({
  user,
  deliveryDetails,
  shopsData,
});
