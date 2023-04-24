import React, { useState, useContext, useEffect } from "react";
import "./CoffeeCart.css";
import { CartContext } from "../../CartContext";

export default function CoffeeCart(product) {
  const { addToCart, removeFromCart, cart, setCart } = useContext(CartContext);
  const [localCount, setLocalCount] = useState(0);

  useEffect(() => {
    const productInCart = cart.find((item) => item.id === product.id);
    if (productInCart) {
      setLocalCount(productInCart.count);
    } else {
      setLocalCount(0);
    }
  }, [cart, product.id]);

  const handleAddClick = () => {
    addToCart(product);
  };

  const handleRemoveClick = () => {
    removeFromCart(product.id);
  };

  const handleInputChange = (event) => {
    const value = parseInt(event.target.value);
    if (isNaN(value)) {
      setLocalCount("");
    } else {
      setLocalCount(value);
      if (value > localCount) {
        addToCart(product.id);
      } else if (value < localCount) {
        removeFromCart(product.id);
      }
    }
  };

  return (
    <>
      <div className="coffeecart-container">
        <img className="coffeecart-img" src={product.src} alt="Coffee test" />
        <div className="coffeecart-frame-container">
          <h6 className="frame-title">{product.name}</h6>
          <div className="coffeecart-buy-actions">
            <div className="coffeecart-action-counter">
              <button
                className="action-counter-btn"
                onClick={handleRemoveClick}
              >
                <img
                  className="counter-btn-plus-minus"
                  src="../public/CoffeeCars-icons/minus-icon.svg"
                  alt="minus-icon"
                />
              </button>
              <input
                className="action-counter-input"
                type="number"
                id={`count-${product.id}`}
                value={localCount}
                onChange={handleInputChange}
                min={0}
              />
              <button className="action-counter-btn" onClick={handleAddClick}>
                <img
                  className="counter-btn-plus-minus"
                  src="../public/CoffeeCars-icons/plus-icon.svg"
                  alt="plus-icon"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="coffeecart-price-container">
          <p className="coffeecart-price">$ {product.totalPrice}</p>
        </div>
      </div>
      <hr className="cartform-hr" />
    </>
  );
}
