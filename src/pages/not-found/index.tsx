import React from 'react'

import { Button } from '../../../styles/notFoundCss'

export default function NotFound() {
  function onClick() {
    window.location.pathname = '/'
  }

  return (
    <div>
      <p>Not found</p>
      <Button onClick={onClick}>Voltar para Tela Inicial</Button>
    </div>
  )
}
