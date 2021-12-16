import React, { useState } from "react";
/* import { useHistory } from 'react-router-dom'; */
/* import { message } from "antd";
import { newCadastro } from "../../services/fetchActions"; */
import {
  H2, Button, Form, DivBody, DivInput, Input, DivButton, DivForm,
} from "./registerCss";

const initialState = {
  name: "",
  email: "",
  password: "",
};

export function Register() {
  const [redirect, setRedirect] = useState(false);
  const [cadastro, setCadastro] = useState(initialState);

  function onChange(event) {
    const { value, name } = event.target;
    setCadastro({
      ...cadastro,
      [name]: value,
    });
  }

  function onSubmit() {
    /* newCadastro(cadastro)
      .then(() => {
        message.success("Sucesso: Usuario criado com sucesso.");
      })
      .catch(() => {
        message.error("Erro: Usuario nao cadastrado.");
      });
    setRedirect(true); */
  }

  if (redirect) {
    /* history.push("/"); */
  }

  function onClickRedirect() {
    window.location.pathname = "/";
  }

  return (
    <DivBody>
      <H2>Registre-se</H2>
      <Form onSubmit={onSubmit}>
        <DivForm>
          <DivInput>
            <Input
              type="text"
              name="name"
              placeholder="Nome"
              onChange={onChange}
              required
            />
          </DivInput>
          <DivInput>
            <Input
              type="text"
              name="email"
              placeholder="Email"
              onChange={onChange}
              required
            />
          </DivInput>
          <DivInput>
            <Input
              type="password"
              name="password"
              onChange={onChange}
              placeholder="Senha"
              required
            />
          </DivInput>
        </DivForm>
        <DivForm>
          <DivButton>
            <Button onClick={onClickRedirect}>Voltar para Tela Inicial</Button>
            <Button type="submit" value="cadastro">
              Cadastra-se
            </Button>
          </DivButton>
        </DivForm>
      </Form>
    </DivBody>
  );
};
