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

export function ACDataOrderConfirmed (orderConfirmed) {
  return {
    type: 'DATA_ORDER_CONFIRMED',
    payload: orderConfirmed
  }
}

export function ACDataOrderCanceled (orderCanceled) {
  return {
    type: 'DATA_ORDER_CANCELED',
    payload: orderCanceled
  }
}

export function ACDataOrderDispatch (orderDispatch) {
  return {
    type: 'DATA_ORDER_DISPATCH',
    payload: orderDispatch
  }
}

export function ACDataOrderConcluded (orderConcluded) {
  return {
    type: 'DATA_ORDER_CONCLUDED',
    payload: orderConcluded
  }
}
