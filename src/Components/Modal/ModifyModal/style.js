/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

export const modalContainer = css`
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 999;  /*제일 위로 올라옴 나머지 클릭x*/

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    background-color: #000000cc;
`;

export const modalSection = css`
    border-radius: 2px;
    padding: 2px;
    width: 350px;
    height: 200px;

    background-color: #fff;
    box-shadow: 0px 0px 10px 1px #000000;
`;

export const modalHeader = css`
    display: flex;
    align-items: center;
    padding: 0px 10px;
    height: 20%;
`;

export const modalTitle = css`
    display: flex;
    align-items: center;
    padding: 0px 10px;
    height: 20%;
`;

export const modalMain = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    height: 50%;
`;

export const todoModifyInput = css`
    margin-top: 10px;
    border-bottom: 1px solid #dbdbdb;
    width: 100%;
    height: 35px;
    text-align: center;
`;

export const modalFooter = css`
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 0px 10px;
    height: 20%;
`;

export const modalButton = css`
    margin-left: 5px;
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