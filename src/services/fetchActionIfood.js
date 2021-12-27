import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
let tokenIfood;

if (typeof window !== "undefined") {
  tokenIfood = localStorage.getItem('tokenIfood');
}

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