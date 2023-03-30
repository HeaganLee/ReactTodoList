/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const style = css`

    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 99;
    width: 200px;
    height: 800px;
    transition: all 1s ease;
    background-color: #dbdbdb;
`;

export const hiddenStyle = css`
    position: absolute;
    top: 0px;
    left: -180px;
    z-index: 99;
    width: 200px;
    height: 800px;
    transition: all 1s ease;
    background-color: none;
`;

export const hiddenMenueStyle = css`
    display: none;
`;

export const buttonStyle = css`
    position: absolute;
    top: 350px;
    left: 179px;

    text-align: center;

    width: 20px;
    height: 20px;
    border: none;
    border-radius: 7px;
    background-color: #dbdbdb;
    color: yellow;

`;



