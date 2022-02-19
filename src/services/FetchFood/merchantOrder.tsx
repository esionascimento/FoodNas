import { APIPOST } from './utilsFood'
import { HeadersDefaults } from 'axios'
import { parseCookies } from 'nookies'

interface CommonHeaderProperties extends HeadersDefaults {
  order: string;
  authorization: unknown
}

function headers(orderId: string) {
  const { 'food.token': token } = parseCookies()
  APIPOST.defaults.headers = {
    authorization: `Bearer ${token}`,
    order: `${orderId}`
  } as CommonHeaderProperties
}

export const fechtOrderEventPolling = () => APIPOST.get('/merchant/order/event:polling')

export const fechtOrderEventAcnowledgment = (data: Array<string>) => APIPOST.post('/merchant/order/event/acknowledgment', data)

export const fechtOrderDetails = (orderId: string) => {
  headers(orderId)
  return APIPOST.get('/merchant/order/details')
}

export const fechtOrderConfirmed = (orderId: string) => {
  headers(orderId)
  return APIPOST.get('/merchant/order/actions/confirm')
}

export const fechtOrderDispatch = (orderId: string) => {
  headers(orderId)
  return APIPOST.get('/merchant/order/dispatch')
}

export const fechtOrderCancelled = (orderId: string) => {
  return APIPOST.post(`/merchant/order/${orderId}/cancelled`)
}
