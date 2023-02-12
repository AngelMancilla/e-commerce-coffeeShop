import React from 'react'
import './CartForm.css'
import CoffeeCart from '../Cart/CoffeeCart'

export default function CartForm( props ) {

  const delivery = 3.50

  return (
    <div className='cartform-container'>
      <div className="cartform-coffeecard-container">
      </div>
      <div className='cartform-data-container'>
        <table className='cartform-table'>
          <tbody>
            <tr>
              <td className='table-data'>Total items</td>
              <td className='table-data table-td-end'>$ { props.totalItems }</td>
            </tr>
            <tr>
              <td className='table-data'>Delivery</td>
              <td className='table-data table-td-end'>$ { delivery }</td>
            </tr>
            <tr>
              <td className='table-total'>Total</td>
              <td className='table-total table-td-end'>$ { props.total }</td>
            </tr>
          </tbody>
        </table>
      </div>
      <button className='cartform-button'>CONFIRM ORDER</button>
    </div>
  )
}
