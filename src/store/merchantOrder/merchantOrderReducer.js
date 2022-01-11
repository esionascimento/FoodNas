const INITIAL_STATE = {
  statusLoja: 'Loja fechada'
};

export function MerchantOrder (state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'STATUS_LOJA':
      return {
        ...state,
        statusLoja: action.payload
      }
    default:
      return state;
  }
};
