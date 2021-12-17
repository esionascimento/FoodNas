import React, { useState } from "react";
/* import { useHistory } from 'react-router-dom'; */
import { message, Form } from "antd";
import { newRegister } from "../../services/fetchActions";
import 'antd/dist/antd.css';

import {
  H2, Button, Form1, Label, DivBody, DivInput, layoutFormItem, layoutForm, Input, DivButton, DivForm,
} from "./registerCss";

export function Register() {
  const [form] = Form.useForm();
  /* const [redirect, setRedirect] = useState(false); */
  /* const [cadastro, setCadastro] = useState(initialState); */

  /* function onChange(event) {
    const { value, name } = event.target;
    setCadastro({
      ...cadastro,
      [name]: value,
    });
  } */

  function checkPassword(cadastro) {
    console.log('cadastro :', cadastro);
    const { password, password2 } = cadastro;
    if (password === password2) {
      return true;
    }
    return false;
  }

  function handleSubmit(cadastro) {
    const { name, email, password } = cadastro
    if (checkPassword(cadastro)) {
      newRegister({ name, email, password })
        .then(() => {
          message.success("Sucesso: Usuario criado com sucesso.");
        })
        .catch(() => {
          message.error("Erro: Usuario nao cadastrado.");
        });
      /* setRedirect(true); */
    } else {
      message.error("Erro: Senha não confere.");
    }
  }

  /* if (redirect) {
    window.location.pathname = "/";
  } */

  function onClickRedirect() {
    window.location.pathname = "/";
  }

  return (
    <DivBody>
      <H2>Registre-se</H2>
      <Form form={form} {...layoutForm} onFinish={handleSubmit}>
        <DivForm>
          <Label>*Nome</Label>
          <Form.Item
            {...layoutFormItem}
            name="name"
            rules={[
              { required: true, message: "Por favor insira o nome!" },
            ]}
          >
            <Input type="text" placeholder="nome"/>
          </Form.Item>
        </DivForm>
        <DivForm>
          <Label>*Email</Label>
          <Form.Item
            {...layoutFormItem}
            name="email"
            rules={[
              { required: true, message: "Por favor insira o email!" },
            ]}
          >
            <Input type="text" placeholder="email@email.com"/>
          </Form.Item>
        </DivForm>
        <DivForm>
          <Label>*Senha</Label>
          <Form.Item
            {...layoutFormItem}
            name="password"
            rules={[
              { required: true, message: "Por favor insira uma senha!" },
            ]}
          >
            <Input type="password" placeholder="******"/>
          </Form.Item>
        </DivForm>
        <DivForm>
          <Label>*Senha novamente</Label>
          <Form.Item
            {...layoutFormItem}
            name="password2"
            rules={[
              { required: true, message: "Por favor insira a senha novamente!" },
            ]}
          >
            <Input type="password" placeholder="******"/>
          </Form.Item>
        </DivForm>
        <DivForm>
          <Label>*ID Loja</Label>
          <Form.Item
            {...layoutFormItem}
            name="idStore"
            rules={[
              { required: true, message: "Por favor insira id da loja!" },
            ]}
          >
            <Input type="password" placeholder=""/>
          </Form.Item>
        </DivForm>
        <DivForm>
          <DivButton {...layoutFormItem}>
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
