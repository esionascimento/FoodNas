import React from 'react'
import { Layout } from 'antd'

import HeaderAntd from '../../components/headerAntd/index'
import LeftMenu from '../../components/left-menu/index'
import ContentBody from '../../components/contentBody/index'
import withAuth from '../../utils/withAuth'

import 'antd/dist/antd.css'

function Dashboard() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      {
        typeof window ! === 'undefined' ? 'null' : <LeftMenu />
      }
      <Layout>
        {
      typeof window ! === 'undefined' ? 'null' : <HeaderAntd />
        }
        <Layout>
          {
            typeof window ! === 'undefined' ? 'null' : <ContentBody />
          }
        </Layout>
      </Layout>
    </Layout>
  )
}

export default withAuth(Dashboard)
