import React from 'react';
require('dotenv').config();

import { fechtAuthenticationCode } from '../../services/fetchActionIfood';

import { DivBody } from './dashboardCss';

export function Dashboard() {
  async function generateCode() {
    const clientId = process.env.REACT_APP_CLIENTEID;
    try {
      const data = await fechtAuthenticationCode({ clientId });
      console.log('data :', data);
      window.location.pathname = '/';
    } catch (err) {
      console.log('err2 :', err);
    }
  }

  return (
    <DivBody>
      <h1>Dashboard</h1>
      <section>
        <div>
          <h3>Clique abaixo para pegar codigo de acesso.</h3>
          <button onClick={generateCode} type="button">Gerar Código</button>
          <h4>Código gerado: </h4>
        </div>
        <div>
          <h3>Autorizar loja.</h3>
          <button type="button">Autorizar</button>
        </div>
        <div>
          <h3>Codigo de autorização.</h3>
          <label>Cole o código de autorização, o mesmo que o Ifood disponibilizou ao autorizar a aplicação.</label>
          <input type="text" required />
          <button type="button">Enviar</button>
        </div>
      </section>
    </DivBody>
  );
}