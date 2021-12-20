import axios from 'axios';
require('dotenv').config();

const BASE_URL = process.env.REACT_APP_BASE_URL;
const token = localStorage.getItem('tokenfoodnas');

const APIPOST = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json',
    'authorization': token,
  },
});

export const newRegister = (user) => axios.post(`${BASE_URL}register`, user);

export const login = (user) => APIPOST.post('/login', user);
