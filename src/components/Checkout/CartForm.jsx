import React, { useContext } from "react";
import "./CartForm.css";
import CoffeeCart from "../Cart/CoffeeCart";
import CoffeeList from "../Home/CoffeeList";
import { CartContext } from "../../CartContext";
import { CheckoutContext } from "../../CheckoutContext";
import { useNavigate } from "react-router-dom";

export default function CartForm({ onSubmit }) {
  const { cart, setCart } = useContext(CartContext);

  const { isFormValid } = useContext(CheckoutContext);

  const delivery = 3.5;

  const totalItems = cart.reduce((acc, product) => acc + product.totalPrice, 0);

  const total = (totalItems + delivery).toFixed(2);

  const totalItemsFixed = totalItems.toFixed(2);

  const navigate = useNavigate();

  const handleClick = () => {
    if (cart.length === 0) {
      alert("El carrito está vacío");
    } else if (!isFormValid) {
      alert("El formulario no se ha llenado correctamente");
    } else {
      navigate("/ConfirmedRequest");
    }
  };

  return (
    <div className="cartform-container">
      <div className="cartform-coffeecard-container">
        {cart &&
          cart.map((product) => (
            <CoffeeCart
              key={product.id}
              src={product.src}
              name={product.name}
              totalPrice={product.totalPrice}
              count={product.count}
              id={product.id}
              price={product.price}
              cart={cart}
              setCart={setCart}
            />
          ))}
      </div>
      <div className="cartform-data-container">
        <table className="cartform-table">
          <tbody>
            <tr>
              <td className="table-data">Total items</td>
              <td className="table-data table-td-end">$ {totalItemsFixed}</td>
            </tr>
            <tr>
              <td className="table-data">Delivery</td>
              <td className="table-data table-td-end">$ {delivery}</td>
            </tr>
            <tr>
              <td className="table-total">Total</td>
              <td className="table-total table-td-end">$ {total}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <button onClick={handleClick} className="cartform-button">
        CONFIRM ORDER
      </button>
    </div>
  );
}
