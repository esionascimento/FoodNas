import axios from 'axios';
require('dotenv').config();

const BASE_URL = process.env.REACT_APP_URL_AUTHENTICATION_CODE;
const tokenIfood = localStorage.getItem('tokenIfood');

const APIPOST = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json',
    'Authorization': `Bearer ${tokenIfood}`,
    'Content-Length': '<calculated when request is sent>',
    'Host': '<calculated when request is sent>',
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

export const fechtAuthenticationCode = () => APIPOST.post('/authentication/v1.0/oauth/userCode');
