import React from 'react';
import LeftMenu from "../../components/left-menu/index";
import {Layout} from "antd";
const { Footer } = Layout;
import 'antd/dist/antd.css';
import withAuth from '../../utils/withAuth';

function Setting() {

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {typeof  window  ! ==  'undefined' ? 'null' : 
        <LeftMenu />
      }
      <Layout>
        <div>
          Configuração
        </div>
        <Footer style={{ textAlign: 'center' }}>...</Footer>
      </Layout>
    </Layout>
  );
}

export default withAuth(Setting);