import axios from 'axios'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
let tokenIfood

if (typeof window !== "undefined") {
  tokenIfood = localStorage.getItem('tokenIfood')
}

export const APIPOST = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Authorization': `Bearer ${tokenIfood}`
  }
});
