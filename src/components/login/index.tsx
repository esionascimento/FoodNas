<<<<<<< HEAD:src/components/login/index.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'antd';
import { fetchLogin } from '../../services/fetchActions';

import { DivCard, DivInputForm, H3, Input, Button, Hr, DivLink, DivButton, Label } from './loginCss';
import ButtonRegister from "../../atoms/button";

=======
import React, { useContext, useState } from 'react';
import Link from 'next/link'
import { Form, message } from 'antd';
import { fechtAuthenticationTokenCentralized } from '../../services/FetchFood/merchantAuthorization'
import { setCookie } from 'nookies';
import { AuthContext } from '../../contexts/AuthContext';
>>>>>>> main:src/components/login/index.tsx

import { DivCard, DivInputForm, H3, Input, Button, Hr, DivLink, DivButton, Label, SpanLink } from './loginCss';
import 'antd/dist/antd.css';

export function Login() {
  const [form] = Form.useForm();
  const { signIn } = useContext(AuthContext)
  const [validLogin, setValidLogin] = useState(false);
  
  async function getTokenFood() {
    try {
      const {data} = await fechtAuthenticationTokenCentralized();
      setCookie(null, 'ifood.token', data.data.accessToken, {maxAge: 86400 * 7, path: '/'})
    } catch (err) {
      console.log('err2 :', err.response);
    }
  }
  
  async function handleSubmit(event: any) {
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
          {/* <Button type="submit" value="login">
            Entrar
          </Button> */}
           <ButtonRegister text="Entrar" />
          
        </DivButton>
        <Hr/>
        <DivLink>
          Não tem uma conta?
          <SpanLink><Link href="/register">Criar nova conta</Link></SpanLink>
        </DivLink>
        {/* <div>
          <a href="#">Esqueceu sua senha?</a>
        </div> */}
      </Form>
    </DivCard>
  );
}