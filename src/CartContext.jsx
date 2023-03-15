import { createContext, useState, useEffect } from "react"
import coffees from "./components/Products/coffees.json"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    setCount(count + 1)
    console.log(count)
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1)
      console.log(count)
    }
  };

  const addToCart = (product) => {
    if (count <= 0) {
      return;
    }
    const totalPrice = count * product.price;
    const newProduct = cart.findIndex((item) => item.id === product.id)
    if (newProduct !== -1) {
      const updatedProduct = {
        ...cart[newProduct],
        count: cart[newProduct].count + count,
        totalPrice: cart[newProduct].totalPrice + totalPrice,
      };
      updatedProduct.price += totalPrice
      setCart([
        ...cart.slice(0, newProduct),
        updatedProduct,
        ...cart.slice(newProduct + 1),
      ]);
    } else {
      setCart([...cart, { ...product, count, totalPrice }])
    }
  };

  useEffect(() => {
    if (cart.length > 0) {
      console.log(cart)
    }
  }, [cart]);

  const removeFromCart = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId))
  };

  const contextValues = {
    cart,
    addToCart,
    removeFromCart,
    incrementCount,
    decrementCount,
  };

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  )
}
