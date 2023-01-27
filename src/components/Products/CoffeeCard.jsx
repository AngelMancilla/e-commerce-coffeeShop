import React, { useState } from 'react'
import './CoffeeCard.css'

export default function CoffeeCard() {

    const [value, setValue] = useState(0);

  return (
    <div className='CoffeeCard-container'>
      <img className='CoffeeCard-img' src="../src/assets/coffees/tradicional.png" alt="" />
      <button className='CoffeeCard-tags'>Traditional</button>
      <h4 className='CoffeeCard-name'>Traditional Espresso</h4>
      <p className='CoffeeCard-description'>Traditional coffee made with hot water and ground beans</p>
      <div className='CoffeeCard-buy-container'>
        <p className='CoffeeCard-buy-price'>$<span className='buy-price-span'>1.99</span></p>
        <div className='CoffeeCard-buy-actions'>
          <div className='CoffeeCard-action-counter'>
            <button className='action-counter-btn' onclick="decrement()"><img className='counter-btn-minus' src="../src/assets/CoffeeCars-icons/minus-icon.svg" alt="minus/icon" /></button>
            <input className='action-counter-input' type="number" id="quantity" value={value} onChange={event => setValue(event.target.value)} min={ 0 } ></input>
            <button className='action-counter-btn' onclick="increment()"><img className='counter-btn-plus' src="../src/assets/CoffeeCars-icons/plus-icon.svg" alt="plus-icon" /></button>
          </div>
          <button className='CoffeeCard-action-Cart'><img className='CoffeeCard-buy-icon' src="../src/assets/intro-icons/cart-icon.svg" alt="" /></button>
        </div>
      </div>
    </div>
  )
}
