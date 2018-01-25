import { combineReducers } from 'redux';
import user from './user';
import shopData from '../../components/map/reducers';

export default combineReducers({
  user,
  shopData,
});
