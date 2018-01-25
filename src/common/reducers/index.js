import { combineReducers } from 'redux';
import user from './user';
import shopsData from '../../components/map/reducers';

export default combineReducers({
  user,
  shopsData,
});
