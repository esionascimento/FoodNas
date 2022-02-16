import React from 'react'
import LeftMenu from '../../components/left-menu/index'
import { Layout } from 'antd'
import 'antd/dist/antd.css'
import withAuth from '../../utils/withAuth'
import HeaderAntd from '../../components/headerAntd'
const { Footer } = Layout

function Report() {
  return (
    <Layout>
      {
        typeof window ! === 'undefined' ? 'null' : <HeaderAntd />
      }
      <Layout style={{ minHeight: '100vh' }}>
        {typeof window ! === 'undefined'
          ? 'null'
          : <LeftMenu />
        }
        <Layout>
          <div>
            Report
          </div>
          <Footer style={{ textAlign: 'center' }}>...</Footer>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default withAuth(Report)
