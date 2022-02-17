import React, { useCallback, useState, memo } from 'react'
import { setCookie, destroyCookie } from 'nookies'
import { Tooltip, Spin } from 'antd'
import { useRouter } from 'next/router'

import 'antd/dist/antd.css'
import * as S from './styled'

const MenuItem = ({ data }) => {
  const { text, active, access, icon, path, id } = data
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const selectItem = (path: string, index: number) => {
    setLoading(true)
    if (index === 5) {
      destroyCookie(null, 'food.sider.index')
      destroyCookie(null, 'food.token')
      destroyCookie(null, 'atlas.id')
      destroyCookie(null, 'atlas.id_store')
      destroyCookie(null, 'atlas.token')
      destroyCookie(null, 'atlas.first_name')
    } else {
      setCookie(null, 'food.sider.index', index.toString(), { maxAge: 86400 * 7, path: '/' })
    }
    router.push(`${path}`)
  }

  return (
    <>
      <Spin spinning={loading} />
        <S.MenuItem
          onClick={useCallback(() => selectItem(path, id), [])}
          key={id}
          icon={icon}
          >
            <Tooltip
              title={
                active && access ? '' : 'Em Desenvolvimento'
              }
              placement="right"
            >
              <S.Text>{text}</S.Text>
            </Tooltip>
        </S.MenuItem>
    </>
  )
}

export default memo(MenuItem)
