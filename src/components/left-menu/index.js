import React, { useState } from "react";
import * as S from "./styled";
import Link from "next/link";
import { Tooltip, Menu } from "antd";
import { iconsListAdmin } from "./options";
import { setCookie, parseCookies } from 'nookies';
import cookiess from 'nookies';
import 'antd/dist/antd.css';

function LeftMenu() {
  const [collapsed, setCollapsed] = useState(true);
  const { 'food.sider.index': foodSiderIndex } = parseCookies();

  const SiderHandleEnter = () => {
    setCollapsed(false);
  };

  const SiderHandleLeave = () => {
    setCollapsed(true);
  };

  function onClick(index) {
    setCollapsed(true);
    setCookie(null, 'food.sider.index', index.key, {maxAge: 86400 * 7, path: '/'});
  }

  return (
    <>
      <S.Sider 
        collapsible
        collapsed={collapsed}
        onMouseEnter={SiderHandleEnter}
        onMouseLeave={SiderHandleLeave}
      >
        <Menu
          onClick={onClick}
          /* style={{ backgroundColor: '#F0F2F5' }} */
          selectable
          defaultSelectedKeys={
            foodSiderIndex ? "0" : foodSiderIndex
          }
          mode="inline"
        >
          {iconsListAdmin.map(
            ({ text, active, access, icon, path }, index) => (
              <S.MenuItem 
                key={index}
                icon={icon}
                >
                <Link href={path} passHref >
                  <Tooltip
                    title={
                      active && access ? "" : "Em Desenvolvimento"
                    }
                    placement="right"
                  >     
                    <S.Text>{text}</S.Text>
                  </Tooltip>
                </Link>
              </S.MenuItem>
            )
          )}
        </Menu>
      </S.Sider>
    </>
  );
}

export default LeftMenu;
