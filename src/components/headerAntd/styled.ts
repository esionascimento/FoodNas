import styled from 'styled-components'

export const DivBody = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 10px;
  color: ${(props: { isTheme: boolean }) => props.isTheme ? '#F0F2F5' : 'black'};
`

export const Div = styled.div`
  display: flex;
  padding: 0 5px;
`

export const DivMenu = styled.div`
  padding: 0 5px;
  &:hover{
    background-color: slateblue;
  }
`
