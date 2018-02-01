import { combineReducers } from 'redux';
import user from './user';
import deliveryDetails from '../../components/delivery-details/reducers';
import shopsData from '../../components/map/reducers';
import orders from '../../components/order-list/reducers/orders-reducer';
import order from '../../components/order-list/reducers/order-reducer';
import orderDetails from '../../components/order-item/reducers/order-details-reducer';
import productsListData from '../../components/products-list/reducers';
import { comments, newComment } from '../../components/comments/reducers';
import product from '../../components/product-page/reducers';
import basket from '../../components/basket/reducers';

export default combineReducers({
  user,
  deliveryDetails,
  shopsData,
  orders,
  order,
  orderDetails,
  productsListData,
  comments,
  newComment,
  product,
  basket,
});
