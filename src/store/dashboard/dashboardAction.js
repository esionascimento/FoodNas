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
