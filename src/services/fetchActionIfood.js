import axios from 'axios';
require('dotenv').config();

const BASE_URL = process.env.REACT_APP_BASE_URL;
const tokenIfood = localStorage.getItem('tokenIfood');

const APIPOST = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Authorization': `Bearer ${tokenIfood}`
  }
});

export const fechtAuthenticationCode = (user) => APIPOST.post('/authentication/usercode', user);

export const fechtAuthenticationTokenCentralized = () => APIPOST.get('/authentication/token/centralized');

export const fechtMerchantCatalogProductList = () => APIPOST.get('/merchant/catalog/list_products');

export const fechtMerchantStatus = () => APIPOST.get('/merchant/merchant/status');

export const fechtMerchantOrderEventPolling = () => APIPOST.get('/merchant/order/event:polling');