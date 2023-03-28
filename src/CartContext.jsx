import { createContext, useState, useEffect } from "react";
import coffees from "./components/Products/coffees.json";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);

  const addToCart = (product) => {
    const productIndex = cart.findIndex((item) => item.id === product.id);
    if (productIndex !== -1) {
      const updatedProduct = { ...cart[productIndex] };
      updatedProduct.count = (updatedProduct.count || 0) + 1;
      updatedProduct.totalPrice += product.price;
      const newCart = [...cart];
      newCart[productIndex] = updatedProduct;
      setCart(newCart);
    } else {
      setCart([
        ...cart,
        {
          ...product,
          count: 1,
          totalPrice: product.price,
        },
      ]);
    }
  };

  const removeFromCart = (itemId) => {
    const productIndex = cart.findIndex((item) => item.id === itemId);

    if (productIndex !== -1) {
      const product = cart[productIndex];

      product.count--;
      product.totalPrice = parseFloat(
        (product.totalPrice - product.price).toFixed(2)
      );

      if (product.count === 0) {
        cart.splice(productIndex, 1);
      }
    }
    setCart([...cart]);
  };

  const contextValues = {
    cart,
    addToCart,
    removeFromCart,
    count,
    setCount,
  };

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};
