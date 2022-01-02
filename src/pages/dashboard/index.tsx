import React from 'react';
import { fechtCatalogProductList } from '../../services/FetchFood/merchantCatalog';
import { fechtAuthenticationTokenCentralized } from '../../services/FetchFood/merchantAuthorization';
import { setCookie } from 'nookies';

import { DivBody } from '../../../styles/dashboardCss';
import withAuth from '../../utils/withAuth';

function Dashboard() {

<<<<<<< HEAD:src/pages/dashboard/Dashboard.jsx
import LeftMenu from "../../components/left-menu/index";
import {Layout} from "antd";


export function Dashboard() {
  const {Content} = Layout;
=======
>>>>>>> main:src/pages/dashboard/index.tsx
  async function generateCode() {
    try {
      const {data} = await fechtAuthenticationTokenCentralized();
      setCookie(null, 'ifood.token', data.data.accessToken, {maxAge: 86400 * 7, path: '/'});

      const aux = await fechtCatalogProductList()
      console.log('aux :', aux.data);
    } catch (err) {
      console.log('err :', err.response);
    }
  }

  return (
<<<<<<< HEAD:src/pages/dashboard/Dashboard.jsx
    <div style={{ overflowX: "hidden" }}>
      <Layout >
        <h1 style={{background: "black", height: "50px", color: "white"}}>header</h1>
        <Layout>
          <div style={{marginTop: "-10px"}}>

          <LeftMenu />
          </div>
          <Content style={{padding: "50px"}}>
            <DivBody>
              <h1 >Dashboard</h1>
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
          </Content>
        </Layout>
      </Layout>
    </div>
=======
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
>>>>>>> main:src/pages/dashboard/index.tsx
  );
}

export default withAuth(Dashboard);
