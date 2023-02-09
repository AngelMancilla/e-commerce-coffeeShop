import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {

  const navigate = useNavigate()

  const homeClick = () => {
    navigate('/')
  }

  const cartClick = () => {
    navigate('/Checkout')
  }

  return (
    <div className="header-container">
      <button onClick={ homeClick } className="header-logo-btn" ><img className="header-logo-icon" src="../src/assets/logo.svg" alt="Logo icon" /></button>
      <div className="header-actions">
        <button
          className="header-actions-location header-button"
          disabled="disabled"
        >
          <img
            className="header-location-icon"
            src="../src/assets/location-svgrepo-com.svg"
            alt="vector icon"
          />
          <span >Tijuana, Mexico</span>
        </button>
        <button  onClick={ cartClick } className="header-actions-cart header-button">
          <img
            className="header-cart-icon"
            src="../src/assets/cart-svgrepo-com.svg"
            alt="cart icon"
          />
        </button>
      </div>
    </div>
  );
};

export default Header;
