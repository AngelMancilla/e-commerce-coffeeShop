import { createContext, useState, useEffect } from "react"
import coffees from "./components/Products/coffees.json"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = (product, count) => {
    if (count <= 0) {
      return; 
    }
    
    const newProduct = cart.findIndex((item) => item.id === product.id);
    if (newProduct !== -1) {
      const totalPrice = count * product.price;
      const updatedProduct = { ...cart[newProduct] };
      updatedProduct.price += totalPrice;
      setCart([
        ...cart.slice(0, newProduct),
        updatedProduct,
        ...cart.slice(newProduct + 1),
      ]);
    } else {
      setCart([...cart, product]);
    }
  };
  
  useEffect(() => {
    if (cart.length > 0) {
      console.log(cart);
    }
  }, [cart]);

  const removeFromCart = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  }

  const contextValues = {
    cart,
    addToCart,
    removeFromCart,
  };

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};
