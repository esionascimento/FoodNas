import { createStore, combineReducers } from 'redux';

import { createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

import { MerchantOrder } from './merchantOrder/merchantOrderReducer';
import { AuthReducer } from './auth/authReducer';

const rootReducer = combineReducers({
  merchantOrder: MerchantOrder,
  auth: AuthReducer
});

const store = () => createStore(
  rootReducer,
  composeWithDevTools()
);
  
export const storeWrapper = createWrapper(store, { debug: false });