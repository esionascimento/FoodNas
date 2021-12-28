import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
let token = undefined;

if (typeof window !== "undefined") {
  token = window.localStorage.getItem('atlas.token');
}

export const APIATLAS = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json'
  }
});

if (token) {
  APIATLAS.defaults.headers['Authorization'] = `${token}`;
}
