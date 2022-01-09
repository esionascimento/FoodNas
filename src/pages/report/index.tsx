import React from 'react';
import LeftMenu from "../../components/left-menu/index";
import {Layout} from "antd";
const { Footer } = Layout;
import 'antd/dist/antd.css';
import withAuth from '../../utils/withAuth';

function Report() {

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {typeof  window  ! ==  'undefined' ? 'null' : 
        <LeftMenu />
      }
      <Layout>
        <div>
          Report
        </div>
        <Footer style={{ textAlign: 'center' }}>...</Footer>
      </Layout>
    </Layout>
  );
}

export default withAuth(Report);
