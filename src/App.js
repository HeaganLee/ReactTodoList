import { Global } from '@emotion/react';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { reset } from './Style/Global/reset';
import Todo from './Pages/Todo/Todo'
import { Navigation } from "react-minimal-side-navigation/lib";
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { HiHome } from 'react-icons/hi';
import Menue from './Components/Menue/Menue';
import { useNavigate } from 'react-router-dom';
import { IoIosList } from 'react-icons/io';
import Container from './Components/Container/Container';



const App = () => {
  return (
   <> 
      <Global style={reset} />
      <Container/>
   </>
  );
};

export default App;