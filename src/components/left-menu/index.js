import React, { useState, useCallback, useEffect } from "react";
import { Menu, Switch } from "antd";
import { setCookie, parseCookies } from 'nookies';
import { useDispatch } from "react-redux";

import MenuItem from './menuItem';
import { ACTheme } from '../../store/dashboard/dashboardAction';

import * as S from "./styled";
import 'antd/dist/antd.css';

function LeftMenu() {
  const dispatch = useDispatch();
  const [collapsed, setCollapsed] = useState(true);
  const [theme, setTheme] = useState();

  const { 'food.sider.index': foodSiderIndex } = parseCookies();
  const { 'foodnas.theme': cookieTheme } = parseCookies();
  
  const changeTheme = value => {
    const valueTheme = value ? 'dark' : 'light';
    setCookie(null, 'foodnas.theme', valueTheme, {maxAge: 86400 * 7});
    setTheme(valueTheme);
  };
  
  useEffect(() => {
    if (!cookieTheme) {
      return setTheme('light');
    }
    dispatch(ACTheme(cookieTheme));
    setTheme(cookieTheme);
  }, [cookieTheme, dispatch]);
  
  const SiderHandleEnter = () => {
    setCollapsed(false);
  };

  const SiderHandleLeave = () => {
    setCollapsed(true);
  };

  const menus = useCallback(() => {
    return (
      <Menu
        theme={theme}
        selectable
        defaultSelectedKeys={
          foodSiderIndex ? foodSiderIndex : "0"
        }
        mode="inline"
        >
          {MenuItem()}
      </Menu>
    )
  }, [foodSiderIndex, theme]);

  const aux = () => {
    return (
      <S.Sider
        width={'150px'}
        collapsedWidth={'60px'}
        theme={theme}
        collapsible
        collapsed={collapsed}
        onMouseEnter={SiderHandleEnter}
        onMouseLeave={SiderHandleLeave}
      >
        <S.DivLoadingSwitch>
          {/* <Spin spinning={loading} /> */}
          <Switch
            checked={theme === 'dark'}
            onChange={changeTheme}
            checkedChildren="Dark"
            unCheckedChildren="Light"
          />
        </S.DivLoadingSwitch>
        {menus()}
      </S.Sider>
    )
  };

  return (
    <>
      {aux()}
    </>
  );
}

export default LeftMenu;
