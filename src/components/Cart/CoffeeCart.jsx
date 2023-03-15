import React, { useState, useContext } from "react";
import "./CoffeeCart.css";
import { CartContext, CartProvider } from "../../CartContext";

export default function CoffeeCart(props) {

  const { cart, setCart, count, setCount } = useContext(CartContext);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleChange = event => {
    setCount(event.target.value);
  };

  return (
    <>
      <div className="coffeecart-container">
        <img className="coffeecart-img" src={props.src} alt="Coffee test" />
        <div className="coffeecart-frame-container">
          <h6 className="frame-title">{props.name}</h6>
          <div className="coffeecart-buy-actions">
            <div className="coffeecart-action-counter">
            <button className="action-counter-btn" onClick={decrement}>
                <img
                  className="counter-btn-plus-minus"
                  src="../src/assets/CoffeeCars-icons/minus-icon.svg"
                  alt="minus-icon"
                />
              </button>
              <input
                className="action-counter-input"
                type="number"
                id="quantity"
                value={count}
                onChange={handleChange}
                min={0}
              />
              <button className="action-counter-btn" onClick={increment}>
                <img
                  className="counter-btn-plus-minus"
                  src="../src/assets/CoffeeCars-icons/plus-icon.svg"
                  alt="plus-icon"
                />
              </button>
            </div>
            
          </div>
        </div>
        <div className="coffeecart-price-container">
          <p className="coffeecart-price">$ {props.totalPrice}</p>
        </div>
      </div>
      <hr className="cartform-hr" />
    </>
  );
}
