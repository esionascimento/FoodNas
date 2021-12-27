import axios from 'axios';
<<<<<<< HEAD

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
let tokenIfood;

if (typeof window !== "undefined") {
  tokenIfood = localStorage.getItem('tokenIfood');
}
=======
require('dotenv').config();

const BASE_URL = process.env.REACT_APP_BASE_URL;
const tokenIfood = localStorage.getItem('tokenIfood');
>>>>>>> d2102fc6703a6482b6cbf25ef53a7dbeeada5ed4

const APIPOST = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Authorization': `Bearer ${tokenIfood}`
  }
});

export const fechtAuthenticationCode = (user) => APIPOST.post('/merchant/authentication/usercode', user);

export const fechtAuthenticationTokenCentralized = () => APIPOST.get('/merchant/authentication/token/centralized');

export const fechtMerchantCatalogProductList = () => APIPOST.get('/merchant/catalog/list_products');

export const fechtMerchantStatus = () => APIPOST.get('/merchant/merchant/status');

export const fechtMerchantOrderEventPolling = () => APIPOST.get('/merchant/order/event:polling');