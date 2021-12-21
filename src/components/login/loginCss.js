import styled from 'styled-components';

export const DivCard = styled.div`
  margin: 10px;
`;

export const DivInputForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media(max-width: 550px) {
    width: 300px;
  }
  @media(max-width: 450px) {
    width: 90%;
  }
`;

export const H3 = styled.h3`
  color: black;
`;

export const Button = styled.button`
  padding: 12px 80px;
  border-radius: 5px;
  margin: 15px 0;
  &:hover{
    background-color: slateblue;
  }
  @media screen and (max-width: 300px) {
    margin: 10px auto;
    padding: 6px 40px;
  }
`;

export const Input = styled.input`
  border-radius: 5px;
  margin-bottom: 15px;
  padding: 10px 15px;
  width: 250px;
  &:focus-visible{
    border-color: rgb(0, 60, 255);
    color: rgb(0, 60, 255);
    outline: none;
  }
  @media screen and (max-width: 400px) {
    margin: 10px auto;
    width: 100%;
    padding: 6px 40px;
  }
`;

export const Hr = styled.hr`
  margin: 5px;
`;

export const Label = styled.label`
font-weight: bold;
`;

export const DivButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  @media(max-width: 450px) {
    width: 100%;
  }
`;

export const DivLink = styled.div`
  display: flex;
  justify-content: center;
`;
