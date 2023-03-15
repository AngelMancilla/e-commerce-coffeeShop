import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Pages/Home'
import Checkout from './components/Pages/Checkout'
import ConfirmedRequest from './components/Pages/ConfirmedRequest';
import { CartProvider } from './CartContext';
import { CheckoutProvider } from './CheckoutContext';

const App = () => {
  return (
    <CartProvider>
      <CheckoutProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/Checkout' element={ <Checkout /> } />
        <Route path='/ConfirmedRequest' element={ <ConfirmedRequest /> } />
      </Routes>
    </BrowserRouter>
    </CheckoutProvider>
    </CartProvider>
  );
}

export default App;

