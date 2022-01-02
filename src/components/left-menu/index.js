import React, { useContext, useState, useEffect } from "react";
// import { ThemeContext } from "styled-components";
import * as S from "./styled";
import { Tooltip } from "antd";
// import { useRouter } from "next/router";
// import Link from "next/link";
import { iconsListAdmin } from "./options";
// import UserIcon from "./userIcon/index";
// import { Data } from "src/models/user/user"; 

function LeftMenu() {
    // const themeContext = useContext(ThemeContext);
    const [collapsed, setCollapsed] = useState(true);

    const [pageRef, setPageRef] = useState(["0"]);

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
        <div style={{ backgroundColor: "black" }}>
            <S.Sider
                collapsible
                collapsed={collapsed}
                trigger={null}
                onMouseEnter={SiderHandle}
                onMouseLeave={SiderHandle}
                collapsedWidth={100}
                
                
            >
                <S.Menu
                    selectable
                    defaultSelectedKeys={
                      ["0"]
                    }
                    mode="inline"
                    
                >
                    {iconsListAdmin.map(
                        ({ name, text, path, active, access }, index) => (
                            <S.MenuItem
                                
                                key={index}
                                // icon={
                                //     <img
                                //         src={themeContext.lateralMenu[name]}
                                //         alt={`icone de navegação para ${name}`}
                                //     />
                                // }
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
                        ),
                    )}
                </S.Menu>
                <S.UserAndExitContainer>
                    {/* <UserIcon /> */}

                    <S.LogOut >
                        {/* <img
                            src="/icons/exit.svg"
                            alt="Botão de sair"
                            style={{ width: 24, height: 24 }}
                        /> */}
                       
                            <div
                                style={{
                                    width: "calc(100% - 200px)",
                                    height: "30px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    position: "fixed",
                                    // bottom: 50,
                                    right: 0,
                                }}
                            >
                                {/* <img
                                    src="/img/cashbanx-logo-marca-dagua.svg"
                                    alt=""
                                    style={{
                                        width: 122,
                                        position: "fixed",
                                        // bottom: 50,
                                    }}
                                /> */}
                            </div>
                       
                    </S.LogOut>
                </S.UserAndExitContainer>
            </S.Sider>
            <S.SiderShadow // Componente criado para conseguir fixar o menu e também tornar o restando do conteúdo responsivo
                collapsible
                collapsed={collapsed}
                trigger={null}
            ></S.SiderShadow>
        </div>
    );
}

export default LeftMenu;