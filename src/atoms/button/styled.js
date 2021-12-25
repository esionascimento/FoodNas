import styled from "styled-components";
import { Button as AndtButton } from "antd";


export const Button = styled(AndtButton)`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 110px;
    height: 36px;
    background: #A9A9A9;
    /* box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25); Box shadow causing a line under the element */
    border-radius: 5px;
    

    :focus,
    :hover {
        background: #A9A9A1;
        border-color: black;
        filter: brightness(1.1);
        transform: scale(0.98);
        border: none;
    }

    .img {
        margin-left: 5px;
    }

`;

export const Text = styled.span`
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 22px;
    font-family: "Poppins";
    color: black;

    /* identical to box height */

`;


export const Span = styled.span`
    ::selection {
        background: black;
    }

`