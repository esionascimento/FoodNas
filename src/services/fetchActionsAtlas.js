import axios from 'axios';
<<<<<<< HEAD
/* require('dotenv').config(); */

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
let token;

if (typeof window !== "undefined") {
  token = window.localStorage.getItem('production_token');
}
=======
require('dotenv').config();

const BASE_URL = process.env.REACT_APP_BASE_URL;
const token = localStorage.getItem('production_token');
>>>>>>> d2102fc6703a6482b6cbf25ef53a7dbeeada5ed4

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
