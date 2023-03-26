import { createContext, useState, useEffect } from "react";
import coffees from "./components/Products/coffees.json";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);

  const addToCart = (product) => {
    console.log(`PRODUCT.id: ${product.id}`);
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

  const updateProductCount = (productid, count) => {
    const updatedCart = {
      ...cart,
      [productid]: {
        ...cart[productid],
        count: count,
      },
    };
    setCart(updatedCart);
  };

  useEffect(() => {
    if (cart.length > 0) {
      console.log(cart);
    }
  }, [cart]);

  const removeFromCart = (itemId) => {
    const productIndex = cart.findIndex((item) => item.id === itemId);

    if (productIndex !== -1) {
      const product = cart[productIndex];

      product.count--;
      product.totalPrice -= product.price;

      if (product.count === 0) {
        cart.splice(productIndex, 1);
      }
    } else {
      console.log(
        `El producto con id ${itemId} no se encuentra en el carrito.`
      );
    }
    setCart([...cart]);
  };

  const contextValues = {
    cart,
    addToCart,
    removeFromCart,
    count,
    setCount,
    updateProductCount,
  };

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};
