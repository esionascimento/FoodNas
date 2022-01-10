import React, { useEffect, useState } from "react";
import * as S from "./styled";
import { Tooltip, Menu, Switch } from "antd";
import { iconsListAdmin } from "./options";
import { useRouter } from 'next/router';
import { setCookie, parseCookies, destroyCookie } from 'nookies';

import 'antd/dist/antd.css';

function LeftMenu() {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(true);
  const [theme, setTheme] = useState();
  
  const { 'food.sider.index': foodSiderIndex } = parseCookies();
  const { 'foodnas.theme': cookieTheme } = parseCookies();
  
  const changeTheme = value => {
    const aux = value ? 'dark' : 'light';
    setCookie(null, 'foodnas.theme', aux, {maxAge: 86400 * 7});
    setTheme(aux);
  };
  
  useEffect(() => {
    if (!cookieTheme) {
      return setTheme('light');
    }
    setTheme(cookieTheme);
  }, [cookieTheme]);
  
  const SiderHandleEnter = () => {
    setCollapsed(false);
  };

  const SiderHandleLeave = () => {
    setCollapsed(true);
  };

  function onClick(path, index) {
    if (index === 4) {
      destroyCookie(null, 'food.sider.index');
      destroyCookie(null, 'food.token');
      destroyCookie(null, 'atlas.id');
      destroyCookie(null, 'atlas.id_store');
      destroyCookie(null, 'atlas.token');
      destroyCookie(null, 'atlas.username');
      router.replace(`${path}`);
    } else {
      setCollapsed(true);
      setCookie(null, 'food.sider.index', index, {maxAge: 86400 * 7, path: '/'});
      router.replace(`${path}`);
    }
  }

  return (
    <>
      <S.Sider
        width={'150px'}
        collapsedWidth={'60px'}
        theme={theme}
        collapsible
        collapsed={collapsed}
        onMouseEnter={SiderHandleEnter}
        onMouseLeave={SiderHandleLeave}
      >
        <Switch
          checked={theme === 'dark'}
          onChange={changeTheme}
          checkedChildren="Dark"
          unCheckedChildren="Light"
        />
        <Menu
          theme={theme}
          selectable
          defaultSelectedKeys={
            foodSiderIndex ? foodSiderIndex : "0"
          }
          mode="inline"
          >
          {iconsListAdmin.map(
            ({ text, active, access, icon, path }, index) => (
              <S.MenuItem 
              onClick={() => onClick(path, index)}
                key={index}
                icon={icon}
                >
                  <Tooltip
                    title={
                      active && access ? "" : "Em Desenvolvimento"
                    }
                    placement="right"
                  >     
                    <S.Text>{text}</S.Text>
                  </Tooltip>
              </S.MenuItem>
            )
          )}
        </Menu>
      </S.Sider>
    </>
  );
}

export default LeftMenu;
