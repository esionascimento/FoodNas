import React from 'react'
import { message, Form } from 'antd'
import { newRegister } from '../../services/FetchAtlas'
import 'antd/dist/antd.css'

import {
  H2, Button, Label, DivBody, layoutFormItem, Input, DivButton, DivForm
} from '../../../styles/registerCss'

export default function Register() {
  const [form] = Form.useForm()

  function checkPassword(cadastro) {
    const { password, password2 } = cadastro
    if (password === password2) {
      return true
    }
    return false
  }

  function handleSubmit(cadastro) {
    // eslint-disable-next-line camelcase
    const { first_name, email, password, id_store } = cadastro
    if (checkPassword(cadastro)) {
      newRegister({ first_name, email, password, id_store })
        .then(() => {
          message.success('Sucesso: Usuario criado com sucesso.')
          onClickRedirect()
        })
        .catch(() => {
          message.error('Erro: Usuario nao cadastrado.')
        })
    } else {
      message.error('Erro: Senha não confere.')
    }
  }

  function onClickRedirect() {
    window.location.pathname = '/'
  }

  return (
    <DivBody>
      <H2>Registre-se</H2>
      <Form form={form} onFinish={handleSubmit}>
        <DivForm>
          <Label>*Nome</Label>
          <Form.Item
            {...layoutFormItem}
            name="first_name"
            rules={[
              { required: true, message: 'Por favor insira o nome!' }
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
              { required: true, message: 'Por favor insira o email!' }
            ]}
          >
            <Input type="email" placeholder="email@email.com"/>
          </Form.Item>
        </DivForm>
        <DivForm>
          <Label>*Senha</Label>
          <Form.Item
            {...layoutFormItem}
            name="password"
            rules={[
              { required: true, message: 'Por favor insira uma senha!' }
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
              { required: true, message: 'Por favor insira a senha novamente!' }
            ]}
          >
            <Input type="password" placeholder="******"/>
          </Form.Item>
        </DivForm>
        <DivForm>
          <Label>*ID Loja</Label>
          <Form.Item
            {...layoutFormItem}
            name="id_store"
            rules={[
              { required: true, message: 'Por favor insira id da loja!' }
            ]}
          >
            <Input type="text" placeholder=""/>
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
  )
}
