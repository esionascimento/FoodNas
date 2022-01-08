import React, { useState } from "react";
import * as S from "./styled";
import Link from "next/link";
import { Tooltip, Menu } from "antd";
import { iconsListAdmin } from "./options";
import 'antd/dist/antd.css';

function LeftMenu() {
  const [collapsed, setCollapsed] = useState(true);

  const SiderHandle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <S.Sider 
        collapsible
        collapsed={collapsed}
        onMouseEnter={SiderHandle}
        onMouseLeave={SiderHandle}
      >
        <Menu style={{ backgroundColor: '#F0F2F5' }}
          selectable
          defaultSelectedKeys={
            ["0"]
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
                    <span style={{ display: "none" }} />
                    
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
