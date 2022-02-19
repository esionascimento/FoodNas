import styled, { css, keyframes } from 'styled-components'

export const DivBody = styled.div`
  height: 75vh;
  overflow: auto;
  border-right: 1px solid rgba(140, 140, 140, 0.35);
`

export const DivFooter = styled.div`
  border-right: 1px solid rgba(140, 140, 140, 0.35);
`

const firstCloseKeyFrame = keyframes`

  from {
    filter: drop-shadow(0 0 0 #ff3366)
  }
  to {
    filter: drop-shadow(0 0 5px red)
  }
`

const firstOpenAnimation = css`
  animation: ${firstCloseKeyFrame} 1s alternate infinite ease-in-out;
  color: red;
`

const firstCloseAnimation = css`
  animation: none;
  color: blue;
`

export const ButtonPending = styled.button<{inbutton: boolean}>`
  ${props => props.inbutton ? firstCloseAnimation : firstOpenAnimation}
`
