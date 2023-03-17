import React, { createContext, useState } from "react"

export const CheckoutContext = React.createContext();

export const CheckoutProvider = ({ children }) => {
  const [isFormValid, setIsFormValid] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState('')
  const [shippingAddress, setShippingAddress] = useState({
    zipcode: '',
    street: '',
    number: '',
    district: '',
    city: '',
    state: ''
  })
  return (
    <CheckoutContext.Provider value={{ isFormValid, setIsFormValid, paymentMethod, setPaymentMethod, shippingAddress, setShippingAddress }}>
      {children}
    </CheckoutContext.Provider>
  );
};
