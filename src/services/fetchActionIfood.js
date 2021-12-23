import axios from 'axios';
require('dotenv').config();

const BASE_URL = process.env.REACT_APP_URL_AUTHENTICATION_CODE;
const tokenIfood = localStorage.getItem('tokenIfood');

const APIPOST = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': "application/x-www-form-urlencoded",
    'User-Agent': 'PostmanRuntime/7.28.4',
    'Accept': "*/*",
    'Host': 'merchant-api.ifood.com.br',
    'Accept-Encoding': 'gzip, deflate, br',
    'Connection': 'keep-alive',
    'Content-Length': '29',
    'Access-Control-Allow-Origin': '*',
  }
});

export const fechtAuthenticationCode = (code) => APIPOST.post('/authentication/v1.0/oauth/userCode', code);
