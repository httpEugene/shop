import { combineReducers } from 'redux';
import user from './user';
import shopsData from '../../components/map/reducers';
import ordersData from '../../components/main-order-list/reducers';

export default combineReducers({
  user,
  shopsData,
  ordersData,
});
