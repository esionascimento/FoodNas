import { createStore, combineReducers } from 'redux';

import { createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

import { MerchantOrder } from './merchantOrder/merchantOrderReducer';
import { AuthReducer } from './auth/authReducer';
import { StoreDashboard } from './dashboard/dashboardReducer';

const rootReducer = combineReducers({
  merchantOrder: MerchantOrder,
  auth: AuthReducer,
  storeDashboard: StoreDashboard
});

const store = () => createStore(
  rootReducer,
  composeWithDevTools()
);
  
export const storeWrapper = createWrapper(store, { debug: false });