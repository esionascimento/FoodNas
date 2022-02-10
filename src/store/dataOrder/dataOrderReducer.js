const INITIAL_STATE = {
  dataOrderAck: {}
};

export function StoreDataOrder (state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'DATA_ORDER_ACK':
      return {
        ...state,
        dataOrderAck: action.payload
      }
    default:
      return state;
  }
};
