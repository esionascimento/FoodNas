import React, { /* useContext, */ useState/* , useEffect */ } from "react";
// import { ThemeContext } from "styled-components";
import * as S from "./styled";
import { Tooltip, Menu } from "antd";
// import { useRouter } from "next/router";
// import Link from "next/link";
import { iconsListAdmin } from "./options";
// import UserIcon from "./userIcon/index";
// import { Data } from "src/models/user/user"; 
import 'antd/dist/antd.css';
/* import {
  WifiOutlined
} from '@ant-design/icons'; */

function LeftMenu() {
  // const themeContext = useContext(ThemeContext);
  const [collapsed, setCollapsed] = useState(true);

  // const router = useRouter();

  // const Logout = () => {
  //     localStorage.removeItem("userAdmin");
  //     localStorage.removeItem("tokenAdmin");
  //     router.push("/admin/login");
  // };

  const SiderHandle = () => {
    setCollapsed(!collapsed);
  };

  // const pagePath = router.pathname;

  // const setDefaultSelected = () => {
  //     if (pagePath === "/admin/dashboard") {
  //         setCollapsed(false);
  //         const newArray = ["1"];
  //         setPageRef(newArray);
  //     }
  // };

  // useEffect(() => {
  //     setDefaultSelected();
  // }, []);

  // const user = JSON.parse(localStorage.getItem("userAdmin"));
  // const isCustomer = user.customer.name !== "cashbanx" ? true : false;

  return (
    <>
      <S.Sider 
        collapsible
        collapsed={collapsed}
        onMouseEnter={SiderHandle}
        onMouseLeave={SiderHandle}
      >
        {/* <WifiOutlined /> */}
        <Menu style={{ backgroundColor: '#F0F2F5' }}
          selectable
          defaultSelectedKeys={
            ["0"]
          }
          mode="inline"
        >
          {iconsListAdmin.map(
            ({ /* name, */ text/* , path */, active, access, icon }, index) => (
              <S.MenuItem 
                key={index}
                icon={icon}
              >
                <Tooltip
                  title={
                    active && access ? "" : "Em Desenvolvimento"
                  }
                  placement="right"
                >
                  <span style={{ display: "none" }} />
                  
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