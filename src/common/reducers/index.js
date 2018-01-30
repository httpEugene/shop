import { combineReducers } from 'redux';
import user from './user';
import deliveryDetails from '../../components/delivery-details/reducers';
import shopsData from '../../components/map/reducers';
import productsListData from '../../components/products-list/reducers';
import { comments, newComment } from '../../components/comments/reducers';
import product from '../../components/product-page/reducers';

export default combineReducers({
  user,
  deliveryDetails,
  shopsData,
  productsListData,
  comments,
  newComment,
  product,
});
