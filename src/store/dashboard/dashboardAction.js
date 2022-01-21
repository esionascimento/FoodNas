export function ACTheme (theme) {
  return {
    type: 'THEME',
    payload: theme
  }
};

export function ACVisibleModalPausa (pausa) {
  return {
    type: 'VISIBLE_MODAL_PAUSA',
    payload: pausa
  }
}

export function ACPausaTempo (pausa) {
  return {
    type: 'PAUSA',
    payload: pausa
  }
}

export function ACDataPedido (pedido) {
  return {
    type: 'LOAD_DATA_PEDIDO',
    payload: pedido
  }
}