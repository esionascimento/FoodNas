import axios, { HeadersDefaults } from 'axios'
import { parseCookies } from 'nookies'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
let tokenIfood

interface CommonHeaderProperties extends HeadersDefaults {
  authorization: string;
}

if (typeof window !== 'undefined') {
  const { 'food.token': token } = parseCookies()
  tokenIfood = token
}

export const APIPOST = axios.create({
  baseURL: BASE_URL,
  headers: {
    authorization: `Bearer ${tokenIfood}`
  }
})

if (tokenIfood) {
  APIPOST.defaults.headers = {
    authorization: `Bearer ${tokenIfood}`
  } as CommonHeaderProperties
}
