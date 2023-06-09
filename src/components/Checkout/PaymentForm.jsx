import React, { useState, useContext } from "react";
import "./PaymentForm.css";
import { CheckoutContext } from "../../CheckoutContext";

export default function PaymentForm() {
  
  const [selectedButton, setSelectedButton] = useState(null);
  const {setPaymentMethod} = useContext(CheckoutContext)

  const handleButtonClick = (e) => {
    setSelectedButton(e.target.id)
    setPaymentMethod(e.target.innerText)
  }

  return (
    <div className="paymentform-container">
      <div className="paymentform-frame-container">
        <img
          className="paymentform-frame-icon"
          src="../public/checkout-icons/dollar-icon.svg"
          alt="dollart pin"
        />
        <div className="frame-text-container">
          <h4 className="frame-text-title">Payment</h4>
          <p className="paymentform-frame-text-subtitle">
            Payment is made on delivery, choose the way you want to pay
          </p>
        </div>
      </div>
      <div className="paymentform-buttons-container">
        <button
          id="1"
          onClick={handleButtonClick}
          className={selectedButton === "1" ? "paymentform-button paymentform-button-selected" : "paymentform-button"}
          text='Credit card'
        >
          <img
            className="buttons-icons"
            src="..\public\checkout-icons\creditcard-icon.svg"
            alt="credit card icon"
          />
          Credit card
        </button>
        <button
          id="2"
          onClick={handleButtonClick}
          className={selectedButton === "2" ? "paymentform-button paymentform-button-selected" : "paymentform-button"}
          text='Debit card'
        >
          <img
            className="buttons-icons"
            src="..\public\checkout-icons\bank.svg"
            alt="bank icon"
          />
          Debit card
        </button>
        <button
          id="3"
          onClick={handleButtonClick}
          className={selectedButton === "3" ? "paymentform-button paymentform-button-selected" : "paymentform-button"}
          text='Cash'
        >
          <img
            className="buttons-icons"
            src="..\public\checkout-icons\money.svg"
            alt="money icon"
          />
          Cash
        </button>
      </div>
    </div>
  );
}
