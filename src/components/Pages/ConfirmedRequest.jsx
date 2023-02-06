import React from 'react'
import './ConfirmedRequest.css'
import Header from '../Common/Header'
import Shipment from '../ConfirmedRequest/Shipment'

export default function ConfirmedRequest() {
  return (
    <>
    <Header />
    <div className='cr-container'>
      <Shipment />
      <img className='cr-img' src="..\src\assets\men.svg" alt="men icon" />
    </div>
    </>
  )
}
