/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

export const contentCotainer = css`
    margin: 10px;
    width: 230px;
    height: 230px;
    box-shadow: 0px 0px 5px 1px #dbdbdb;
    cursor: pointer;
    transition: box-shadow 0.3s ease;
    &:hover{
        box-shadow: 0px 0px 10px 1px #121212;
    }
`;

export const contentHeader = css`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #f0f0f0;
    padding: 10px;
    padding-bottom: 5px;
    height: 20%;
`;

export const todoDate = css`
    display: flex;
    align-items: flex-start;
    height: 100%;
    font-size: 20px;
    line-height: 15px;
`;

export const todoDateTime = css`
    display: flex;
    align-items: flex-end;
    font-size: 11px;
`;

export const contentMain = css`
    padding: 10px;
    height: 49%;
    word-break: keep-all;
    line-height: 25px;

    word-wrap: break-word;
`;

export const contentFooter = css`
    display: flex;
    justify-content: flex-end;
    padding: 10px;
    padding-top: 0;
    height: 15%;
`;

export const modifyAndRemoveButton = css`
    border: 1px solid #dbdddb;
    padding: 5px 10px;
    background-color: white;
    font-weight: 600;
    cursor: pointer;

    border: none;
    padding: 5px;

    &:hover{
        background-color: #fafafa;
    }
    &:active{
        background-color: #f0f0f0;
    }
`;
