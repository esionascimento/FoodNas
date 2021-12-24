import axios from 'axios';
require('dotenv').config();

const BASE_URL = process.env.REACT_APP_BASE_URL;
const tokenIfood = localStorage.getItem('tokenIfood');

const APIPOST = axios.create({
  baseURL: BASE_URL
});

export const fechtAuthenticationCode = (user) => APIPOST.post('/authentication/usercode', user);

export const fechtAuthenticationTokenCentralized = () => APIPOST.get('/authentication/token/centralized');

export const fechtMerchantCatalogProductList = () => APIPOST.post('/merchant/list_products');
