import React from 'react'
import './AddressForm.css'

export default function AddressForm() {
  return (
    <div className='addressform-container'> 
      <div className='addressform-frame-container'>
        <img className='addressform-frame-icon' src='../src/assets/checkout-icons/Pin-icon.svg' alt='Icon pin' />
        <div className='frame-text-container'>
          <h4 className='frame-text-title'>Delivery address</h4>
          <p className='frame-text-subtitle'>Enter the address where you want to receive your order</p>
        </div>
      </div>
      <div className='addressform-form-container'>
        <form  action="">
        <input className='form-input form-input-zipcode' type="text" name="zipcode" id="input-zipcode" placeholder='Zip code'/>
        <input className='form-input form-input-street' type="text" name="street" id="input-street" placeholder='Street'/>
        <div className='form-action-s1'>
        <input className='form-input form-input-number' type="text" name="number" id="input-number"  placeholder='Number'/>
        <input className='form-input form-input-complement' type="text" name="complement" id="input-complement"  placeholder='Complement'/>
        </div>
        <div className='form-action-s2'>
          <input className='form-input form-input-district' type="text" name="district" id="input-district"  placeholder='District'/>
          <input className='form-input form-input-city' type="text" name="city" id="input-city"  placeholder='City'/>
          <input className='form-input form-input-state' type="text" name="state" id="input-state"  placeholder='State'/>
        </div>
        </form>
      </div>
    </div>
  )
}
