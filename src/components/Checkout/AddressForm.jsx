import React, {useContext, useState, useEffect} from 'react'
import './AddressForm.css'
import { CheckoutContext } from '../../CheckoutContext'


export default function AddressForm(props) {
  
const { setIsFormValid, setShippingAddress } = useContext(CheckoutContext)
const [formValues, setFormValues] = useState({
 zipcode: '',
 street: '',
 number: '',
 district: '',
 city: '',
 state:''
})

const handleInputChange = (event) => {
  const { name, value } = event.target
  setFormValues({ ...formValues, [name]: value })
}

useEffect(() => {
  const isFormValid = Object.values(formValues).every((value) => value !== '')
  setIsFormValid(isFormValid)
  setShippingAddress(formValues)
}, [formValues, setIsFormValid, setShippingAddress])

  return (
    <div className='addressform-container'> 
      <div className='addressform-frame-container'>
        <img className='addressform-frame-icon' src='../src/assets/checkout-icons/Pin-icon.svg' alt='Icon pin' />
        <div className='frame-text-container'>
          <h4 className='frame-text-title'>Delivery address</h4>
          <p className='addressform-frame-text-subtitle'>Enter the address where you want to receive your order</p>
        </div>
      </div>
      <div className='addressform-form-container'>
        <form >
        <input className='form-input form-input-zipcode' type="number" name="zipcode" onChange={handleInputChange}  id="input-zipcode" placeholder='Zip code' />
        <input className='form-input form-input-street' type="text" name="street" onChange={handleInputChange}  id="input-street" placeholder='Street' />
        <div className='form-action-s1'>
        <input className='form-input form-input-number' type="number" name="number" onChange={handleInputChange} id="input-number"  placeholder='Number' />
        <input className='form-input form-input-complement' type="text" name="complement" onChange={handleInputChange} id="input-complement"  placeholder='Complement' />
        </div>
        <div className='form-action-s2'>
          <input className='form-input form-input-district' type="text" name="district" onChange={handleInputChange} id="input-district"  placeholder='District' />
          <input className='form-input form-input-city' type="text" name="city" onChange={handleInputChange} id="input-city" placeholder='City' />
          <input className='form-input form-input-state' type="text" name="state" onChange={handleInputChange} id="input-state"  placeholder='State' />
        </div>
        </form>
      </div>
    </div>
  )
}
