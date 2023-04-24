import React from "react";
import "./Title.css";

export default function Title() {
  return (
    <div className="intro-container">
      <div className="intro-text-container">
        <div className="intro-title-container">
          <h1 className="intro-title">
            Find the perfect coffee for any time of the day
          </h1>
          <p className="intro-subtitle">
            With Coffee Delivery you get your coffee wherever you are, at any
            time
          </p>
        </div>
        <div className="intro-items-container">
          <ul className="intro-items-lists">
            <li className="intro-lists-item">
              <button className="item-btn item-btn-cart">
                <img
                  src="./intro-icons/cart-icon.svg"
                  alt="icon cart"
                  className="item-icon-cart"
                />
              </button>
              Simple and secure purchase
            </li>
            <li className="intro-lists-item">
              <button className="item-btn item-btn-timer">
                <img
                  src="./intro-icons/timer-icon.svg"
                  alt="icon timer"
                  className="item-icon-timer"
                />
              </button>
              Fast and tracked delivery
            </li>
            <li className="intro-lists-item">
              <button className="item-btn item-btn-package">
                <img
                  src="./intro-icons/package-icon.svg"
                  alt="icon package"
                  className="item-icon-package"
                />
              </button>
              The packaging keeps the coffee intact
            </li>
            <li className="intro-lists-item">
              <button className="item-btn item-btn-coffee">
                <img
                  src="./intro-icons/coffee-icon.svg"
                  alt="icon coffee"
                  className="item-icon-coffee"
                />
              </button>
              The coffee comes to you fresh
            </li>
          </ul>
        </div>
      </div>
      <img
        className="intro-coffee-img"
        src="./coffee.png"
        alt="coffee icon"
      />
    </div>
  );
}
