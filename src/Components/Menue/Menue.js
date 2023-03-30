/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { Navigation } from "react-minimal-side-navigation/lib";
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { HiHome } from 'react-icons/hi';
import * as S from './style'
import { useNavigate } from 'react-router-dom';
import { IoIosList } from 'react-icons/io';



const Menue= ( { menueFlage, hiddenMenue }) => {
    

    const navigate = useNavigate();
    return (
        <div onClick={hiddenMenue} css={menueFlage ? S.hiddenStyle : S.style}>
            <aside css={menueFlage ? S.hiddenMenueStyle : null}>
                <Navigation
                activeItemId="/"
                onSelect={({itemId}) => {
                    navigate(itemId);
                }}
                items={[
                {
                    title: "Home",
                    itemId: '/',
                    elemBefore: () => <HiHome />
                },
                {
                    title: 'TodoList',
                    itemId: '/todo',
                    elemBefore: () => <IoIosList />,
                },
                ]}
            />
            </aside>
            <button css={S.buttonStyle} onClick={hiddenMenue}>{menueFlage ? "▶" : "◀"}</button>
        </div>
    );
};

export default Menue;