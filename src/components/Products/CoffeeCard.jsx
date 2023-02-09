import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import './CoffeeCard.css'

export default function CoffeeCard( props ) {

    const [value, setValue] = useState(0);

    const tags = []
    for (let i = 0; i < props.numTags; i++) {
    tags.push(<button className='CoffeeCard-tags' key={i}>{props.tag[i]}</button>)
     }

    const navigate = useNavigate()
    const handleClick = () => { navigate('/Checkout') }

  return (
    <>
    <div className='CoffeeCard-container'>
      <img className='CoffeeCard-img' src={props.src} alt={props.name} />
      <div className='CoffeeCard-tags-container'>
        {tags}
      </div>
      <h4 className='CoffeeCard-name'>{props.name}</h4>
      <p className='CoffeeCard-description'>{props.description}</p>
      <div className='CoffeeCard-buy-container'>
        <p className='CoffeeCard-buy-price'>$<span className='buy-price-span'>{props.price}</span></p>
        <div className='CoffeeCard-buy-actions'>
          <div className='CoffeeCard-action-counter'>
            <button className='action-counter-btn' onclick="decrement()"><img className='counter-btn-minus' src="../src/assets/CoffeeCars-icons/minus-icon.svg" alt="minus/icon" /></button>
            <input className='action-counter-input' type="number" id="quantity" value={value} onChange={event => setValue(event.target.value)} min={ 0 } ></input>
            <button className='action-counter-btn' onclick="increment()"><img className='counter-btn-plus' src="../src/assets/CoffeeCars-icons/plus-icon.svg" alt="plus-icon" /></button>
          </div>
          <button onClick={ handleClick } className='CoffeeCard-action-Cart'><img className='CoffeeCard-buy-icon' src="../src/assets/intro-icons/cart-icon.svg" alt="" /></button>
        </div>
      </div>
    </div>
    </>
  )
}
