import React from 'react'
import './CartForm.css'
import CoffeeCart from '../Cart/CoffeeCart'

export default function CartForm() {
  return (
    <div className='cartform-container'>
      <div className="cartform-coffeecard-container">
        <CoffeeCart></CoffeeCart>
      </div>
      <div className='cartform-data-container'>
        <table className='cartform-table'>
          <tbody>
            <tr>
              <td className='table-data'>Total items</td>
              <td className='table-data table-td-end'>$ 5.20</td>
            </tr>
            <tr>
              <td className='table-data'>Delivery</td>
              <td className='table-data table-td-end'>$ 3.50</td>
            </tr>
            <tr>
              <td className='table-total'>Total</td>
              <td className='table-total table-td-end'>$ 8.70</td>
            </tr>
          </tbody>
        </table>
      </div>
      <button className='cartform-button'>CONFIRM ORDER</button>
    </div>
  )
}
