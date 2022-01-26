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

export function ACIsLoja (isLoja) {
  return {
    type: 'IS_LOJA',
    payload: isLoja
  }
}

export function ACSelectPedido (selectPedido) {
  return {
    type: 'SELECT_PEDIDO',
    payload: selectPedido
  }
}

export function ACSelectOrderId (selectOrderId) {
  return {
    type: 'SELECT_ORDER_ID',
    payload: selectOrderId
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
