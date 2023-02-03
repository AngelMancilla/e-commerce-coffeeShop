import React, { useState } from "react";
import "./PaymentForm.css";

export default function PaymentForm() {
  
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (id) => {
    setSelectedButton(id);
  };

  return (
    <div className="paymentform-container">
      <div className="paymentform-frame-container">
        <img
          className="paymentform-frame-icon"
          src="../src/assets/checkout-icons/dollar-icon.svg"
          alt="dollart pin"
        />
        <div className="frame-text-container">
          <h4 className="frame-text-title">Payment</h4>
          <p className="frame-text-subtitle">
            Payment is made on delivery, choose the way you want to pay
          </p>
        </div>
      </div>
      <div className="paymentform-buttons-container">
        <button
          onClick={() => handleButtonClick(1)}
          className={selectedButton === 1 ? "paymentform-button paymentform-button-selected" : "paymentform-button"}
        >
          <img
            className="buttons-icons"
            src="..\src\assets\checkout-icons\creditcard-icon.svg"
            alt="credit card icon"
          />
          Credit card
        </button>
        <button
          onClick={() => handleButtonClick(2)}
          className={selectedButton === 2 ? "paymentform-button paymentform-button-selected" : "paymentform-button"}
        >
          <img
            className="buttons-icons"
            src="..\src\assets\checkout-icons\bank.svg"
            alt="bank icon"
          />
          Debit card
        </button>
        <button
          onClick={() => handleButtonClick(3)}
          className={selectedButton === 3 ? "paymentform-button paymentform-button-selected" : "paymentform-button"}
        >
          <img
            className="buttons-icons"
            src="..\src\assets\checkout-icons\money.svg"
            alt="money icon"
          />
          Cash
        </button>
      </div>
    </div>
  );
}
