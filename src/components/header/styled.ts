import styled from "styled-components";
import { Affix, Col as AntCol, Row, Menu as AntMenu } from "antd";

export const AffixHeader = styled(Affix)``;

export const DivLink = styled.div`
    width: 222px;
    height: 85px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: #808080;

  

    > span {
        color: #4d4d4d;
        padding-left: 10px;
        font-family: Poppins;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        background-color: black;
    }

    :hover {
        border-bottom: 4px solid #f3f3f3;

        > span {
            color: #f3f3f3;
        }

        img {
            filter: invert(63%) sepia(59%) saturate(2740%) hue-rotate(110deg)
                brightness(93%) contrast(83%);
        }
    }
`;

export const DivHover = styled.div`
    background-color:  #808080;
    color: white;
    font-family: Poppins;
    border: black;
    width: 222px;
    height: 160px;
    position: fixed;
    top: 80px;
    display: flex;
    margin-left: -147px;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 0 0 10px 10px;

    
`;

export const SpanDrop = styled.span`
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    width: 182px;

    > span {
        margin-left: 10px;
        color: #4d4d4d;
    }

    > img {
        filter: invert(30%) sepia(9%) saturate(9%) hue-rotate(315deg)
            brightness(95%) contrast(93%) !important;
    }

    :hover {
        > span {
            color: #f3f3f3;
        }

        img {
            filter: invert(63%) sepia(59%) saturate(2740%) hue-rotate(110deg)
                brightness(93%) contrast(83%) !important;
        }
    }
`;
