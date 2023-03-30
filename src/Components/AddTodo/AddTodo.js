/** @jsxImportSource @emotion/react */
import React from 'react';
import *  as S from './style'
import { FaFile } from 'react-icons/fa';
import { BiPlus } from 'react-icons/bi';

const AddTodo = ( { onChange, onKeyup, value, onAdd}) => {
    return (
        <div css={S.todoInputContainer}>
            <FaFile css={S.iconFaFile}/>
            <input type="text" css={S.todoInput} placeholder="Please enter todo..." onChange={onChange} onKeyUp={onKeyup} value={value}/>
            <button css={S.addTodoButton} onClick={onAdd}><BiPlus/></button>
        </div>
    );
};

export default AddTodo;