const INITIAL_STATE = {
  theme: 'light',
  modalPausa: {
    visibleModalPausa: false,
    tempo: -1
  }
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
    default:
      return state;
  }
};
