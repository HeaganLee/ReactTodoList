/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react";
import React from 'react';
import { useState } from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "../../Pages/Home/Home";
import Todo from '../../Pages/Todo/Todo';
import Menue from '../Menue/Menue';



const Container = () => {

    const [menueFlage, setMenueFlage] = useState(true);

    const hiddenMenue = () => {
        if(menueFlage){
            setMenueFlage(false)
        }else{
            setMenueFlage(true)
        }
    }

    const container = css`
    box-sizing: border-box;
    position: relative;
    margin: 50px auto;
    border: 1px solid #dbdddb;
    width: 600px;
    height: 800px;
    background-color: white;
    overflow: hidden;
`;
   
    return (
        <div css={container}>  
            <Menue menueFlage={menueFlage} hiddenMenue={hiddenMenue}/> 
            <Routes>
                <Route path="/" Component={Home} />
                <Route path='/todo' Component={Todo}/>
            </Routes>
        </div>
    );
};

export default Container;