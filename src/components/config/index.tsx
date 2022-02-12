import React from "react";
import { message, Form } from "antd";
import { fetchRegisterUpdate } from '../../services/FetchAtlas';

import {
  H2, Button, Label, DivBody, layoutFormItem, Input, DivButton, DivForm,
} from "../register/registerCss";

export const Config: React.FC = () => {
  const [form] = Form.useForm();

  function handleSubmit(cadastro: any) {
    const { first_name } = cadastro;
    fetchRegisterUpdate({first_name})
    .then(() => {
      message.success("Sucesso: Usuario editado com sucesso.");
    })
    .catch(() => {
      message.error("Erro: Usuario nao editado.");
    })
  }

  return (
    <>
      <DivBody>
        <H2>Editar dados</H2>
        <Form form={form} onFinish={handleSubmit}>
          <DivForm>
            <Label>Primeiro Nome</Label>
            <Form.Item
              {...layoutFormItem}
              name="first_name"
              rules={[
                { required: true, message: "Por favor insira o nome!" },
              ]}
            >
              <Input type="text" placeholder=""/>
            </Form.Item>
          </DivForm>
          <DivForm>
            <DivButton {...layoutFormItem}>
              <Button type="submit" value="edit">
                Editar
              </Button>
            </DivButton>
          </DivForm>
        </Form>
      </DivBody>
    </>
  )
}
