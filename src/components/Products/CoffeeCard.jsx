import React, { useState, useContext } from 'react'
import { useNavigate } from "react-router-dom";
import './CoffeeCard.css'
import { CartContext, CartProvider } from '../../CartContext'

export default function CoffeeCard( props ) {

    const { addToCart } =  useContext(CartContext)

    //Add the label
    const tags = []
    for (let i = 0; i < props.numTags; i++) {
    tags.push(<button className='CoffeeCard-tags' key={i}>{props.tag[i]}</button>)
     }

    //Routes
    const navigate = useNavigate()
    const handleClick = () => { navigate('/Checkout') }

     //Add the products in an array
    const [count, setCount] = useState(0);

    const increment = () => {
      setCount(count + 1)
      
    };

    const decrement = () => { 
      if (count > 0) {
        setCount(count - 1);
        
      }
    }

    const handleChange = event => {
      setCount(event.target.value);
    };

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
            <button className='action-counter-btn' onClick={decrement}><img className='counter-btn-minus' src="../src/assets/CoffeeCars-icons/minus-icon.svg" alt="minus-icon" /></button>
            <input className='action-counter-input' type="number" id="quantity" value={ count } onChange={handleChange} min={ 0 } ></input>
            <button className='action-counter-btn' onClick={increment}><img className='counter-btn-plus' src="../src/assets/CoffeeCars-icons/plus-icon.svg" alt="plus-icon" /></button>
          </div>
          <button onClick={ () => addToCart(props, count) } className='CoffeeCard-action-Cart'><img className='CoffeeCard-buy-icon' src="../src/assets/intro-icons/cart-icon.svg" alt="" /></button>
        </div>
      </div>
    </div>
    </>
  )
}
