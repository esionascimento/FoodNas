import React from 'react';
import { fechtCatalogProductList } from '../../services/FetchFood/merchantCatalog';
import { fechtAuthenticationTokenCentralized } from '../../services/FetchFood/merchantAuthorization';
import { setCookie } from 'nookies';

import { DivBody } from '../../../styles/dashboardCss';
import withAuth from '../../utils/withAuth';
import LeftMenu from "../../components/left-menu/index";
import {Layout} from "antd";
const { Footer } = Layout;
import 'antd/dist/antd.css';

function Dashboard() {
  const {Content} = Layout;
  async function generateCode() {
    try {
      const {data} = await fechtAuthenticationTokenCentralized();
      setCookie(null, 'food.token', data.data.accessToken, {maxAge: 86400 * 7, path: '/'});

      const aux = await fechtCatalogProductList()
      console.log('aux :', aux.data);
    } catch (err) {
      console.log('err :', err.response);
    }
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {typeof  window  ! ==  'undefined' ? 'null' : 
        <LeftMenu />
      }
      <Layout>
        <Content>
          <DivBody>
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
        <Footer style={{ textAlign: 'center' }}>...</Footer>
      </Layout>
    </Layout>
  );
}

export default withAuth(Dashboard);
