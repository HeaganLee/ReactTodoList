/** @jsxImportSource @emotion/react */
import React from 'react';
import { useState } from 'react';
import * as S from './style'

const RemoveModal = ({ removeTodo,removeCloseModal, onRemove, updateLocalStorage}) => {

    const removeOk = (id) => {
        onRemove(id);
        updateLocalStorage();
    }

    return (
        <div css={S.modalContainer}>
        <div css={S.modalSection}>
            <div css={S.modalHeader}>
                <h1 css={S.modalTitle}>ToDo 삭제</h1>
            </div>
            <div css={S.modalMain}>
                <p>{removeTodo.content}를 삭제하시겠습니까?</p>
            </div>
            <div css={S.modalFooter}>
                <button type="button" css={S.modalButton} onClick={() => removeOk(removeTodo.id)}>확인</button>
                <button type="button" css={S.modalButton} onClick={() => removeCloseModal(removeTodo.id)}>취소</button>
            </div>
        </div>
    </div>
    );
};

export default RemoveModal;