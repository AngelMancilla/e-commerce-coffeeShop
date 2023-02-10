import React, { useState } from 'react'
import './CoffeeCart.css'

export default function CoffeeCart( props ) {

  const [value, setValue] = useState(0);


  return (
    <>
    <div className='coffeecart-container'>
      <img className='coffeecart-img' src={ props.img } alt="Coffee test" />
      <div className='coffeecart-frame-container'>
        <h6 className='frame-title'>{ props.name }</h6>
        <div className='coffeecart-buy-actions'>
          <div className='coffeecart-action-counter'>
            <button className='action-counter-btn' onclick="decrement()"><img className='counter-btn-plus-minus' src="../src/assets/CoffeeCars-icons/minus-icon.svg" alt="minus/icon" /></button>
            <input className='action-counter-input' type="number" id="quantity" value={value} onChange={event => setValue(event.target.value)} min={ 0 } ></input>
            <button className='action-counter-btn' onclick="increment()"><img className='counter-btn-plus-minus' src="../src/assets/CoffeeCars-icons/plus-icon.svg" alt="plus-icon" /></button>
          </div>
          <button className='coffeecart-action-trash'><img className='coffeecart-trash-icon' src="..\src\assets\Products-icon\trash-icon.svg" alt="trash icon"/>REMOVE</button>
        </div>
      </div>
      <div className='coffeecart-price-container'>
        <p className='coffeecart-price'>{ props.price }</p>
      </div>
    </div>
    <hr className='cartform-hr' />
    </>
  )
}
