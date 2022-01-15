const INITIAL_STATE = {
  theme: 'light'
};


export function StoreDashboard (state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'THEME':
      return {
        ...state,
        theme: action.payload
      }

    default:
      return state;
  }
};