const INITIAL_STATE = {
  theme: 'light',
  modalPausa: {
    visibleModalPausa: false,
    tempo: -1
  },
  dataLog: [],
  isLoja: 'Abrir Loja',
  selectPedido: '',
  selectOrderId: '',
  dataOrderDetails: {},
  dataOrderPending: []
};


export function StoreDashboard (state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'THEME':
      return {
        ...state,
        theme: action.payload
      }
    case 'VISIBLE_MODAL_PAUSA':
      return {
        ...state,
        modalPausa: {
          ...state.modalPausa,
          visibleModalPausa: action.payload
        }
      }
    case 'PAUSA':
      return {
        ...state,
        modalPausa: {
          ...state.modalPausa,
          tempo: action.payload
        }
      }
    case 'LOAD_DATA_PEDIDO':
      return {
        ...state,
        dataLog: action.payload
      }
    case 'IS_LOJA':
      return {
        ...state,
        isLoja: action.payload
      }
    case 'SELECT_PEDIDO':
      return {
        ...state,
        selectPedido: action.payload
      }
    case 'SELECT_ORDER_ID':
      return {
        ...state,
        selectOrderId: action.payload
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
