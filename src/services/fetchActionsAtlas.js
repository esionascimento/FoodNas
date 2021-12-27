import axios from 'axios';
/* require('dotenv').config(); */

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
let token;

if (typeof window !== "undefined") {
  token = window.localStorage.getItem('production_token');
}

const APIPOST = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json',
    'authorization': token,
  },
});

export const newRegister = (user) => axios.post(`${BASE_URL}register`, user);

export const fetchLogin = (user) => APIPOST.post('/login', user);

export const authenticate = (token) => APIPOST.post('/authorization', token);
