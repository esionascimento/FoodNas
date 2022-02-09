export function ACDataOrderAck (orderAck) {
  return {
    type: 'DATA_ORDER_ACK',
    payload: orderAck
  }
}
