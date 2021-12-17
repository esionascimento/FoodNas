import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'antd';
/* import { login } from '../../services/fetchActions'; */

import { DivCard, DivInputForm, H3, Input, Button, Hr, DivLink, DivButton, Label } from './loginCss';


export function Login() {
  const [form] = Form.useForm();
  const [validLogin, setValidLogin] = useState(false);
  
  function handleSubmit(event) {
    try {
      /* const { data: { token } } = await login({ email, password });
      localStorage.setItem('token', token);
      window.location.pathname = '/dashboard'; */
    } catch (err) {
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
        <div>
          <DivLink>
            Não tem uma conta?
            <Link to="/register">Criar nova conta</Link>
          </DivLink>
          {/* <div className="">
            <a href="#">Esqueceu sua senha?</a>
          </div> */}
        </div>
      </Form>
    </DivCard>
  );
}