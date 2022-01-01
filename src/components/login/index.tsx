import React, { useContext, useState } from 'react';
import Link from 'next/link'
import { Form, message } from 'antd';
import { fechtAuthenticationTokenCentralized } from '../../services/FetchFood/merchantAuthorization'
import { setCookie } from 'nookies';

import { DivCard, DivInputForm, H3, Input, Button, Hr, DivLink, DivButton, Label } from './loginCss';
import { AuthContext } from '../../contexts/AuthContext';

export function Login() {
  const [form] = Form.useForm();
  const { signIn } = useContext(AuthContext)
  const { isAuthenticated } = useContext(AuthContext)
  const [validLogin, setValidLogin] = useState(false);
  
  async function getTokenFood() {
    try {
      const {data} = await fechtAuthenticationTokenCentralized();
      setCookie(null, 'ifood.token', data.data.accessToken, {maxAge: 86400 * 7, path: '/'})
    } catch (err) {
      console.log('err2 :', err.response);
    }
  }
  
  async function handleSubmit(event) {
    try {
      await signIn(event)
      await getTokenFood()
      message.success("Sucesso Login.");
      window.location.pathname = '/dashboard';
    } catch (err) {
      message.error("Error: Informações incorretas ou não existe.");
      setValidLogin(err);
    }
  }

  return (
    <DivCard>
      <Form form={form} onFinish={handleSubmit}>
        {validLogin && 
          <H3>Credenciais inexistente ou invalida</H3>
        }
        <DivInputForm>
          <Label>Qual é o seu e-mail?</Label>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Por favor insira o email!" },
            ]}
          >
            <Input type="email" placeholder="email@email.com"/>
          </Form.Item>
        </DivInputForm>
        <DivInputForm>
          <Label>Informe sua senha, por favor.</Label>
          <Form.Item
            name="password"
            rules={[
              { required: true, message: "Por favor insira a senha!" },
            ]}
          >
            <Input type="password" placeholder="******"/>
          </Form.Item>
        </DivInputForm>
        <DivButton>
          <Button type="submit" value="login">
            Entrar
          </Button>
        </DivButton>
        <Hr/>
        <DivLink>
          Não tem uma conta?
          <Link href="/register">Criar nova conta</Link>
        </DivLink>
        {/* <div>
          <a href="#">Esqueceu sua senha?</a>
        </div> */}
      </Form>
    </DivCard>
  );
}