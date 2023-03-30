/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import * as S from './style'
import imgfile from './images/데스노트.png'
import { motion } from "framer-motion";

const style = css`
    stroke: white;
    stroke-width: 2;
`

const background = css`
    background-color: black;
`;

const App = css`
    font-family: sans-serif;
    text-align: center;
`;

const img = css`
    width: 50vmin;
    margin-top: 15vmin;
`


const Home = () => {
    const variants = {
    start: { pathLength: 0, fill: "rgba(255, 255, 255,0)" },
    end: { pathLength: 1, fill: "rgba(255,255,255,1)" }
  };



    return (
         <motion.div css={S.mainContainer}
        className="box"
        animate={{ scale: [1, 1.5, 1.1] }}
         transition={{ duration: 3, times: [0, 0.2, 1] }}
      >
         <div>
            <img css={S.mainTitle} src={imgfile}/>
         </div>
        
     </motion.div>
   

    );
};

export default Home;