import React from 'react'
import './Checkout.css'
import Header from '../Common/Header'
import AddressForm from '../Checkout/AddressForm'
import PaymentForm from '../Checkout/PaymentForm'
import CartForm from '../Checkout/CartForm'

export default function Checkout() {

  return (
    <>
    <Header />
    <div className='checkout-container'>
      <div className='checkout-form-container'>
        <h2 className='checkout-title' >Complete your order</h2>
        <AddressForm/>
        <br />
        <PaymentForm />
      </div>
      <div className='checkout-cart-container' >
        <h2 className='checkout-title'>Selected coffees</h2>
        <CartForm />
      </div>
    </div>
    </>
  )
}
