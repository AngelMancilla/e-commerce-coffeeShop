import React from 'react'
import './Shipment.css'

export default function Shipment() {
  return (
    <div className='shipment-container'>
      <h1 className='shipment-title' >Your order has been confirmed</h1>
      <h3 className='shipment-subtitle' >Now just wait for the coffee to arrive soon</h3>
      <div className='shipment-box-container' >
      <div className='shipment-frame-container'>
        <button className='shipment-frame-button' style={{backgroundColor: '#794aef'}} disabled='disabled' ><img className='shipment-frame-icon' src='..\src\assets\ConfirmedRequest-icons\pin-icon.svg' alt='Icon pin' /></button>
        <div className='frame-text-container'>
          <h4 className='frame-text-title'>Delivery in <strong>(Street), (num)</strong></h4>
          <p className='frame-text-subtitle'>(city) - (state), (country)</p>
        </div>
      </div>
      <div className='shipment-frame-container'>
        <button className='shipment-frame-button' style={{backgroundColor: '#d4ae48'}} disabled="disabled"><img className='shipment-frame-icon' src='..\src\assets\ConfirmedRequest-icons\timer-icon.svg' alt='Icon timer' /></button>
        <div className='frame-text-container'>
          <h4 className='frame-text-title'>Estimated delivery time</h4>
          <p className='frame-text-subtitle'><strong>20 min - 30 min</strong></p>
        </div>
      </div>
      <div className='shipment-frame-container'>
        <button className='shipment-frame-button' style={{backgroundColor: '#ba8232'}} disabled="disabled"><img className='shipment-frame-icon' src='..\src\assets\ConfirmedRequest-icons\currencydolar-icon.svg' alt='Icon Currency dolar' /></button>
        <div className='frame-text-container'>
          <h4 className='frame-text-title'>Payment method</h4>
          <p className='frame-text-subtitle'><strong>(Payment method)</strong></p>
        </div>
      </div>
      </div>
    </div>
  )
}
