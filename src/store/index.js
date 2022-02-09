import { createStore, combineReducers } from 'redux';

import { createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

import { MerchantOrder } from './merchantOrder/merchantOrderReducer';
import { AuthReducer } from './auth/authReducer';
import { StoreDashboard } from './dashboard/dashboardReducer';
import { StoreDataOrder } from './dataOrder/dataOrderReducer';

const rootReducer = combineReducers({
  merchantOrder: MerchantOrder,
  auth: AuthReducer,
  storeDashboard: StoreDashboard,
  storeDataOrder: StoreDataOrder
});

const store = () => createStore(
  rootReducer,
  composeWithDevTools()
);
  
export const storeWrapper = createWrapper(store, { debug: false });
