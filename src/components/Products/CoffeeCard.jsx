import React from 'react'
import './CoffeeCard.css'

export default function CoffeeCard() {
  return (
    <div className='CoffeeCard-container'>
      <img className='CoffeeCard-img' src="../src/assets/coffees/tradicional.png" alt="" />
      <button className='CoffeeCard-tags'>Tradicional</button>
      <h4 className='CoffeeCard-name'>traditional espresso</h4>
      <p className='CoffeeCard-description'>Traditional coffee made with hot water and ground beans</p>
      <div className='coffeeCard-buy-container'>
        <p className='CoffeeCard-buy-price'>$<span className='buy-price-span'>1.99</span></p>
        <div className='CoffeeCard-buy-actions'>
          <div className='CoffeeCard-action-counter'>
            <button className='action-counter-btn' onclick="decrement()">-</button>
            <input className='action-counter-input' type="number" id="quantity" value="0"></input>
            <button className='action-counter-btn' onclick="increment()">+</button>
          </div>
          <button className='CoffeeCard-action-Cart'><img className='CoffeeCard-buy-icon' src="../src/assets/intro-icons/cart-icon.svg" alt="" /></button>
        </div>
      </div>
    </div>
  )
}
