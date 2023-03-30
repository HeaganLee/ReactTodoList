/** @jsxImportSource @emotion/react */
import * as S  from './style';
import React from 'react';
import { BiPen } from 'react-icons/bi';
import { TiTrash } from 'react-icons/ti';

const TodoList = ( {todo, modifyopenModal , removeOpenModal}) => {
    return (
        <li css={S.contentCotainer} key={todo.id}>
        <div css={S.contentHeader}>
            <div css={S.todoDate}>{todo.date}</div>
            <div css={S.todoDateTime}>{todo.time}</div>
        </div>
        <div css={S.contentMain}>
           {todo.content}
        </div>
        <div css={S.contentFooter}>
            <button css={S.modifyAndRemoveButton} onClick={() => modifyopenModal(todo.id)}>
               <BiPen/>
            </button>
            <button css={S.modifyAndRemoveButton} onClick={() => removeOpenModal(todo.id)}>
                <TiTrash/>
            </button>
        </div>
    </li>
    );
};

export default TodoList;


