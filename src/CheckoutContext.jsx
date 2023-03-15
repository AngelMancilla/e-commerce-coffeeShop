import React, { createContext, useState } from "react"

export const CheckoutContext = React.createContext();

export const CheckoutProvider = ({ children }) => {
  const [isFormValid, setIsFormValid] = useState(false);

  return (
    <CheckoutContext.Provider value={{ isFormValid, setIsFormValid }}>
      {children}
    </CheckoutContext.Provider>
  );
};
