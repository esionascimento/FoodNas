export function ACDataOrderAck (orderAck) {
  return {
    type: 'DATA_ORDER_ACK',
    payload: orderAck
  }
}

export function ACDataOrderDetails (orderDetails) {
  return {
    type: 'DATA_ORDER_DETAILS',
    payload: orderDetails
  }
}

export function ACDataOrderPending (orderPending) {
  return {
    type: 'DATA_ORDER_PENDING',
    payload: orderPending
  }
}
