import React from 'react'
import './CoffeeList.css'
import CoffeeCard from '../Products/CoffeeCard'
import products from '../Products/coffees.json'

export default function CoffeeList() {
  return (
    <div className='CoffeeList-container'>
      <h1 className='CoffeeList-Title'>Our coffees</h1>
      <div className='CoffeeList-CoffeeCard-container'>
      {products.map((product, i) => (
        <CoffeeCard
          key={i}
          name={product.name}
          numTags={product.numTags}
          tag={product.tag}
          src={product.img}
          price={product.price}
          description={product.description}
        />
      ))}
      </div>
    </div>
  )
}
