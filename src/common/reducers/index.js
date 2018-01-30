import { combineReducers } from 'redux';
import user from './user';
import deliveryDetails from '../../components/delivery-details/reducers';
import shopsData from '../../components/map/reducers';
import ordersData from '../../components/main-order-list/reducers';
import productsListData from '../../components/products-list/reducers';
import { comments, newComment } from '../../components/comments/reducers';

export default combineReducers({
  user,
  deliveryDetails,
  shopsData,
  ordersData,
  productsListData,
  comments,
  newComment,
});
