import styled from "styled-components";
import { Layout, Menu as AntMenu } from "antd";

export const DivLoadingSwitch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Sider = styled(Layout.Sider)`
    /* padding: 40px 0 0 0; */
    /* justify-content: space-between; */
    /* background-color: #F0F2F5; */
    /* position: fixed;
    width: 500px; */

    /* .ant-menu-item .ant-menu-item-only-child .sc-eCImPb .jCRzzH {
      padding: 0px;
    } */

    /* .ant-layout-sider-collapsed .sc-gsDKAQ .bQqxTG {
      width: 500px;

    }
    max-width: 200px; */
    
`;

export const SiderShadow = styled(Layout.Sider)`
    /* padding: 55px 30px 0 0;
    justify-content: space-between;
    background-color: black;
    width: 0px; */

`;

export const Menu = styled(AntMenu)`
    /* height: calc(75vh - 85px);
    border: 1px solid black;
    background-color: black !important;
    width: 100%;

    .ant-menu-item .ant-menu-item-selected .ant-menu-item-only-child .sc-eCImPb .jCRzzH {
      padding: 0px;
    }

    .ant-menu-item-selected {
        background: linear-gradient(
            270deg,
            rgba(22, 190, 118, 0.15) 0%,
            rgba(22, 190, 118, 0) 72.22%
        ) !important;

        span > a {
            color: #f3f3f3 !important;
        }

        img {
            filter: invert(63%) sepia(59%) saturate(2740%) hue-rotate(110deg)
                brightness(93%) contrast(83%);
        }

        border-right: 3px solid #f3f3f3 !important;
    }

    .ant-menu-item::after {
        border-right: 3px solid #f3f3f3 !important;
    }

    .ant-menu-item {
        span > a {
            color: #4d4d4d;
        }

        :hover {
            span > a {
                color: #f3f3f3 !important;
            }

            img {
                filter: invert(63%) sepia(59%) saturate(2740%)
                    hue-rotate(110deg) brightness(93%) contrast(83%);
            }
        }
    } */
`;

export const MenuItem = styled(AntMenu.Item)`
  /* .ant-menu.ant-menu-inline-collapsed > .ant-menu-item, .ant-menu.ant-menu-inline-collapsed > .ant-menu-item-group > .ant-menu-item-group-list > .ant-menu-item, .ant-menu.ant-menu-inline-collapsed > .ant-menu-item-group > .ant-menu-item-group-list > .ant-menu-submenu > .ant-menu-submenu-title, .ant-menu.ant-menu-inline-collapsed > .ant-menu-submenu > .ant-menu-submenu-title {
    padding: 0px;
  } */

`;

export const LinkContainer = styled.div`
    /* display: flex;
    flex-direction: column;
    align-self: center;
    align-items: center;
    justify-content: center;
    justify-self: center;
    width: 85px;
    height: 65px;
    text-align: center;
    cursor: pointer;

    img {
        width: 20px;
        height: 20px;
    }

    h5 {
        display: none;
        margin-top: 5px;
        color: black;
        font-size: 8px;
        font-family: Poppins;
        font-style: normal;
        font-weight: 500;
    }

    :hover {
        h5 {
            display: block;
            color: #16be76;
        }

        img {
            filter: invert(63%) sepia(59%) saturate(2740%) hue-rotate(110deg)
                brightness(93%) contrast(83%);
        }
    } */
`;

export const UserAndExitContainer = styled.div`
    /* display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    height: 25vh; */
`;

export const LogOut = styled.div`
    /* display: flex;
    width: 100%;
    height: 75px;
    text-align: center;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    border-top: 1.5px solid #1f1f1f;

    img {
        width: 30px;
        height: 30px;
    } */
`;


export const Text = styled.span`
    /* color: white;
    font-family: "Poppins";
    font-size: 12px;
    width: 100%; */
`;