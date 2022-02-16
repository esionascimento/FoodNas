import React from 'react'
import * as S from './styled'
import PropType from 'prop-types'

function ButtonRegister({ text }) {
  return (
      <S.Button className="material-icons">
        <S.Text>{text}</S.Text>

        <S.Span className="material-icons">
          input
        </S.Span>
      </S.Button>
  )
}

ButtonRegister.propTypes = {
  text: PropType.string.isRequired
}

export default ButtonRegister
