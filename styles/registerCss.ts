import styled from "styled-components";

export const DivBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  width: 150px;
  text-align: start;
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

export const Form1 = styled.form`
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
  height: 40px;
  width: 100%;
  align-items: center;
  &:focus-visible {
    border-color: rgb(0, 60, 255);
    color: rgb(0, 60, 255);
    outline: none;
  }
  @media(max-width: 550px) {
    height: 40px;
  }
  @media(max-width: 450px) {
    height: 35px;
  }
`;

export const DivForm = styled.div`
  display: flex;
  align-items: center;
  margin: 10px auto;
  width: 400px;
  @media(max-width: 550px) {
    width: 300px;
  }
  @media(max-width: 450px) {
    align-items: start;
    flex-direction: column;
    width: 90%;
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
    width: 400px;
  }
`;

export const layoutFormItem = {
  style: {
    boder: "red",
    display: "flex",
    width: "100%",
    margin: "auto 0",
  }
}

export const layoutForm = {
  style: {
    margin: "0px"
  }
}
