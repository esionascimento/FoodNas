import React from 'react'
import { Layout } from 'antd'
import 'antd/dist/antd.css'
import withAuth from '../../utils/withAuth'
import LeftMenu from '../../components/left-menu/index'
import HeaderAntd from '../../components/headerAntd'
import { Config } from '../../components/config'
const { Footer } = Layout

function Setting() {
  return (
    <Layout>
        {typeof window ! === 'undefined'
          ? 'null'
          : <LeftMenu />
        }
      <Layout style={{ minHeight: '100vh' }}>
        {
          typeof window ! === 'undefined' ? 'null' : <HeaderAntd />
        }
        <Layout>
          <div>
            Configuração
          </div>
          <div>
            <Config />
          </div>
          <Footer style={{ textAlign: 'center' }}>...</Footer>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default withAuth(Setting)
