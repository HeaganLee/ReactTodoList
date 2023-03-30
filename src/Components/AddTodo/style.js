/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";

export const todoInputContainer = css`
    position: relative;
    display: flex;
    align-items: flex-end;
    margin-bottom: 3px;
    border: none;
    border-bottom: 1px solid #dbdbdb;
    padding-right: 50px;
    width: 60%;
    height: 40px;
    font-size: 20px;
    margin: 8px;
`;

export const iconFaFile = css`
    font-size: 30px;
    margin: 8px;
`;

export const todoInput = css`
    border: none;
    padding: 0 70px;
    width: 100%;
    height: 100%;
    transition: padding 0.5s ease;
    &:focus{
        padding: 0px 10px;
        outline: none;
        background-color:  #fafafa;
    }
`;

export const addTodoButton = css`
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    right: 0px;

    border: none;
    padding: 5px 20px;
    height: 100%;

    background-color: white;
    &:hover {
        background-color:  #fafafa;
    }
`;