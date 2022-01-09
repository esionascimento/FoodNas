import axios from 'axios'
import { parseCookies } from "nookies";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
let tokenIfood = undefined;

if (typeof window !== "undefined") {
  const { 'food.token': token } = parseCookies();
  tokenIfood = token;
}

export const APIPOST = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Authorization': `Bearer ${tokenIfood}`
  }
});

if (tokenIfood) {
  APIPOST.defaults.headers['Authorization'] = `Bearer ${tokenIfood}`;
}
