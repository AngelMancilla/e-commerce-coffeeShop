import React, { useState } from 'react'
import './CoffeeList.css'
import CoffeeCard from '../Products/CoffeeCard'
import products from '../Products/coffees.json'

export default function CoffeeList() {

  const [totalCount, setTotalCount] = useState(0);

  const handleCountChange = (count) => {
  setTotalCount(count)
  }

  
  const [cart, setCart] = useState([{}])
  const addProductToCart = (products) => {
    setCart([...cart, {...products, count: 1}]);
    console.log(cart)
  }

  return (
    <div className='CoffeeList-container'>
      <h1 className='CoffeeList-Title'>Our coffees</h1>
      <div className='CoffeeList-CoffeeCard-container'>
      {products.map((product, i) => (
        <CoffeeCard
          key={ i }
          name={ product.productName }
          numTags={ product.numTags }
          tag={ product.tag }
          src={ product.img }
          price={ product.price }
          description={ product.description }
          onCountChange={ handleCountChange }
          addProductToCart={ addProductToCart }
        />
      ))}
      </div>
    </div>
  )
}
