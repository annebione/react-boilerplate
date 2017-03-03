import { combineReducers } from 'redux';
import user from './components/user/userReducer';
import products from './components/products/productsReducer';

export default combineReducers({
	user,
	products
});