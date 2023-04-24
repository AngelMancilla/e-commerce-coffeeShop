import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./CoffeeCard.css";
import { CartContext } from "../../CartContext";

export default function CoffeeCard(product) {
  const { addToCart, cart, removeFromCart } = useContext(CartContext);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const productInCart = cart.find((item) => item.id === product.id);
    if (productInCart) {
      setCount(productInCart.count);
    }
  }, [cart, product.id]);

  const handleIncreaseClick = () => {
    setCount(count + 1);
    addToCart(product);
  };

  const handleDecreaseClick = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(product);
    handleIncreaseClick();
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product.id);
    handleDecreaseClick();
  };

  const tags = [];
  for (let i = 0; i < product.numTags; i++) {
    tags.push(
      <button className="CoffeeCard-tags" key={i}>
        {product.tag[i]}
      </button>
    );
  }

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Checkout");
  };

  return (
    <>
      <div className="CoffeeCard-container">
        <img className="CoffeeCard-img" src={product.src} alt={product.name} />
        <div className="CoffeeCard-tags-container">{tags}</div>
        <h4 className="CoffeeCard-name">{product.name}</h4>
        <p className="CoffeeCard-description">{product.description}</p>
        <div className="CoffeeCard-buy-container">
          <p className="CoffeeCard-buy-price">
            $<span className="buy-price-span">{product.price}</span>
          </p>
          <div className="CoffeeCard-buy-actions">
            <div className="CoffeeCard-action-counter">
              <button
                className="action-counter-btn"
                onClick={handleRemoveFromCart}
              >
                <img
                  className="counter-btn-minus"
                  src="./CoffeeCars-icons/minus-icon.svg"
                  alt="minus-icon"
                />
              </button>
              <input
                className="action-counter-input"
                type="number"
                id="quantity"
                value={count}
                min={0}
                readOnly={true}
              ></input>
              <button className="action-counter-btn" onClick={handleAddToCart}>
                <img
                  className="counter-btn-plus"
                  src="./CoffeeCars-icons/plus-icon.svg"
                  alt="plus-icon"
                />
              </button>
            </div>
            <button onClick={handleClick} className="CoffeeCard-action-Cart">
              <img
                className="CoffeeCard-buy-icon"
                src="./intro-icons/cart-icon.svg"
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
