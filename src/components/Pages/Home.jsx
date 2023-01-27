import React from 'react'
import Header from '../Common/Header'
import Title from '../Home/Title'
import CoffeeList from '../Home/CoffeeList'
import './Home.css'

export default function Home() {
  return (
    <div>
      <div className='Header-Comp'>
        <Header/>
      </div>
      <div className='Title-Comp'>
        <Title/>
      </div>
      <div className='CoffeeList-Comp'>
        <CoffeeList/>
      </div>
    </div>
  )
}
