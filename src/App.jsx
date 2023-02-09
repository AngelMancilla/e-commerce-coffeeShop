import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Pages/Home'
import Checkout from './components/Pages/Checkout'
import ConfirmedRequest from './components/Pages/ConfirmedRequest';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/Checkout' element={ <Checkout /> } />
        <Route path='/ConfirmedRequest' element={ <ConfirmedRequest /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

