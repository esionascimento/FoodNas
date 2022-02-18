const INITIAL_STATE = {
  dataOrderAck: {},
  dataOrderDetails: {},
  dataOrderPending: [],
  dataOrderConfirmed: [],
  dataOrderDispatch: [],
  dataOrderConcluded: [],
  dataOrderCanceled: []
}

export function StoreDataOrder (state = INITIAL_STATE, action: { type: string; payload: unknown }) {
  switch (action.type) {
    case 'DATA_ORDER_ACK':
      return {
        ...state,
        dataOrderAck: action.payload
      }
    case 'DATA_ORDER_DETAILS':
      return {
        ...state,
        dataOrderDetails: action.payload
      }
    case 'DATA_ORDER_PENDING':
      return {
        ...state,
        dataOrderPending: action.payload
      }
    case 'DATA_ORDER_CONFIRMED':
      return {
        ...state,
        dataOrderConfirmed: action.payload
      }
    case 'DATA_ORDER_DISPATCH':
      return {
        ...state,
        dataOrderDispatch: action.payload
      }
    case 'DATA_ORDER_CONCLUDED':
      return {
        ...state,
        dataOrderConcluded: action.payload
      }
    case 'DATA_ORDER_CANCELED':
      return {
        ...state,
        dataOrderCanceled: action.payload
      }
    default:
      return state
  }
}
