import { combineReducers, applyMiddleware, legacy_createStore } from 'redux';
import {thunk} from 'redux-thunk';
import { productReducer } from '../productRedux/reducer';
import { cartReducer } from '../cartRedux/reducer';
import { orderReducer } from '../orderRedux/reducer';
import { authReducer } from '../authRedux/Reducer';

const rootReducers = combineReducers({
  auth: authReducer,
  product: productReducer,
  cart: cartReducer,
  order: orderReducer
});

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk));