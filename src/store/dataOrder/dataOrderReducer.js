const INITIAL_STATE = {
  dataOrderAck: {},
  dataOrderDetails: {},
  dataOrderPending: []
};

export function StoreDataOrder (state = INITIAL_STATE, action) {
  switch(action.type) {
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
    default:
      return state;
  }
};
