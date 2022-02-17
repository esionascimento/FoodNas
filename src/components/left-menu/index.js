import React/* , { useState, useEffect } */ from 'react'
import { Menu, Layout } from 'antd'
import { parseCookies } from 'nookies'
/* import { useDispatch } from 'react-redux' */

import { iconsListAdmin } from './options'

import MenuItem from './menuItem'
/* import { ACTheme } from '../../store/dashboard/dashboardAction' */

import 'antd/dist/antd.css'
const { Sider } = Layout

function LeftMenu() {
  /* const dispatch = useDispatch() */
  /* const [theme, setTheme] = useState('dark') */

  const { 'food.sider.index': foodSiderIndex } = parseCookies()
  /* const { 'foodnas.theme': cookieTheme } = parseCookies() */

  /* const changeTheme = value => {
    const valueTheme = value ? 'dark' : 'light'
    setCookie(null, 'foodnas.theme', valueTheme, { maxAge: 86400 * 7 })
    setTheme(valueTheme)
  } */

  /* useEffect(() => {
    if (cookieTheme) {
      return setTheme('light')
    }
    dispatch(ACTheme(cookieTheme))
    setTheme(cookieTheme)
  }, [cookieTheme]) */

  return (
    <>
      <Sider collapsed={true}>
        <Menu
          theme={'dark'}
          selectable
          defaultSelectedKeys={
            foodSiderIndex || '0'
          }
          mode="inline"
          >
            {iconsListAdmin.map(data => <MenuItem key={data.id} data={data} />)}
        </Menu>
      </Sider>
    </>
  )
}

export default LeftMenu
