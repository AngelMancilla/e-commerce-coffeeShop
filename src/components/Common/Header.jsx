import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <img className="header-logo-icon" src="../src/assets/logo.svg" alt="Logo icon" />
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
        <button className="header-actions-cart header-button">
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
