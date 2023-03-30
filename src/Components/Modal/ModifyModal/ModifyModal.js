/** @jsxImportSource @emotion/react */
import * as S from './style'
import React, { useEffect, useState } from 'react';

const ModifyModal = ( {onModify, modifyCloseModal, modifyTodo, updateLocalStorage} ) => {

    const [modifyTodoContent, setModifyTodoContent] = useState({
        id:0,
        date:'',
        time: '',
        content:''
    });

    const onKeyUp = (e) => {
        if(e.keyCode === 13) {
            onModify(modifyTodoContent);
        }
    }

    const onChange = (e) => {
        console.log(e.target.value)
        setModifyTodoContent({
            ...modifyTodoContent,
            content: e.target.value
        });
    }
    useEffect(
        () => {
            setModifyTodoContent(modifyTodo);
        }, []
    );
    
    return (
        <>
        <div css={S.modalContainer}>
            <div css={S.modalSection}>

                <div css={S.modalHeader}>
                    <h1 css={S.modalTitle}>ToDo 수정</h1>
                </div>
                <div css={S.modalMain}>
                    <p class="modal-message"></p>
                    <input type="text" css={S.todoModifyInput} onChange={onChange} onKeyUp={onKeyUp} value={modifyTodoContent.content}/>
                </div>
                <div css={S.modalButton}>
                    <button type="button" css={S.modalButton} onClick={() => onModify(modifyTodoContent)}>확인</button>
                    <button type="button" css={S.modalButton} onClick={() => modifyCloseModal(modifyTodoContent.id)}>취소</button>
                </div>
            </div>
        </div>
        </>
    );
};

export default ModifyModal;