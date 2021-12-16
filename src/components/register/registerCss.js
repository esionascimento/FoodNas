import styled from "styled-components";

export const DivBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export const H2 = styled.h2`
  text-align: center;
  margin: 20px;
`;

export const Button = styled.button`
  padding: 5px;
  border-radius: 5px;
  &:hover {
    background-color: slateblue;
  }
  @media(max-width: 550px) {
    margin: 5px;
  }
  @media(max-width: 450px) {
    margin: 5px;
  }
`;

export const Form = styled.form`
  width: 500px;
  margin: 0 auto;
  @media(max-width: 450px) {
    width: 250px;
    margin: 0 auto;
  }
`;

export const DivInput = styled.div`
  margin: 0 auto;
  padding: 10px 15px;
  width: 400px;
  @media(max-width: 550px) {
    width: 300px;
    padding: 8px 13px;
  }
  @media(max-width: 450px) {
    width: 200px;
    padding: 5px 10px;
  }
`;

export const Input = styled.input`
  border-radius: 5px;
  height: 50px;
  width: 100%;
  &:focus-visible {
    border-color: rgb(0, 60, 255);
    color: rgb(0, 60, 255);
    outline: none;
  }
  @media(max-width: 550px) {
    height: 45px;
  }
  @media(max-width: 450px) {
    height: 40px;
  }
`;

export const DivForm = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 400px;
  @media(max-width: 550px) {
    width: 300px;
  }
  @media(max-width: 450px) {
    width: 200px;
  }
`;

export const DivButton = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
  width: 400px;
  @media(max-width: 550px) {
    width: 300px;
  }
  @media(max-width: 450px) {
    width: 200px;
  }
`;