import React, { useState } from 'react';
import { Link } from 'react-router-dom';
/* import { login } from '../../services/fetchActions'; */

import { DivCard, Form, DivInputForm, H3, Input, Button, Hr, DivLink } from './loginCss';

function initialState() {
  return { email: '', password: '' };
}

export function Login() {
  const [valuesLogin, setValues] = useState(initialState);
  const [validLogin, setValidLogin] = useState(false);
  const { email, password } = valuesLogin;

  function onChange(event) {
    const { value, name } = event.target;
    setValues({
      ...valuesLogin,
      [name]: value,
    })
  }
  
  async function onSubmit(event) {
    event.preventDefault();
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
      <Form onSubmit={onSubmit}>
        {validLogin && 
          <H3>Credenciais inexistente ou invalida</H3>
        }
        <DivInputForm>
          <Input type="text"
            name="email"
            value={email}
            required
            placeholder="email@email.com"
            onChange={onChange}
          />
          <Input type="password"
            name="password"
            onChange={onChange}
            value={password}
            required
            placeholder="Senha"
          />
        </DivInputForm>
        <DivInputForm>
          <Button
            type="submit"
            value="Login"
          >
            Entrar
          </Button>
        </DivInputForm>
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