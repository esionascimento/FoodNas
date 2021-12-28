import React, { useEffect } from 'react';
import { fechtCatalogProductList } from '../../services/FetchFood/merchantCatalog'
import { fechtAuthenticationTokenCentralized } from '../../services/FetchFood/merchantAuthorization'

import { DivBody } from '../../../styles/dashboardCss';
import { APIATLAS } from '../../services/FetchAtlas/utilsAtlas';
import { GetServerSideProps } from 'next';

export default function Dashboard() {

  useEffect(() => {
    APIATLAS.get('/');
  }, [])

  async function generateCode() {
    try {
      const {data} = await fechtAuthenticationTokenCentralized();
      localStorage.setItem('tokenIfood', data.data.accessToken)
      const aux = await fechtCatalogProductList()
      console.log('aux :', aux.data);
    } catch (err) {
      console.log('err2 :', err.response);
    }
  }

  return (
    <DivBody>
      <h1>Dashboard</h1>
      <section>
        <div>
          <h3>Clique abaixo para pegar codigo de acesso.</h3>
          <button onClick={generateCode} type="button">Gerar Código</button>
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
