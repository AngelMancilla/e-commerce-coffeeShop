import React from 'react'
import './CoffeeList.css'
import CoffeeCard from '../Products/CoffeeCard'

export default function CoffeeList() {
  return (
    <div className='CoffeeList-container'>
      <h1 className='CoffeeList-Title'>Our coffees</h1>
      <div className='CoffeeList-CoffeeCard-container'>
        <CoffeeCard
        src={'../src/assets/coffees/tradicional.png'}
        numTags={1}
        tag={['Traditional']}
        name={'Traditional Espresso'}
        description={'Traditional coffee made with hot water and ground beans'}
        price={'1.99'}
        />
        <CoffeeCard
        src={'../src/assets/coffees/americano.png'}
        numTags={1}
        tag={['Traditional']}
        name={'American Express'}
        description={'Diluted espresso, less intense than the traditional one'}
        price={'1.99'}
        />
        <CoffeeCard
        src={'../src/assets/coffees/cremoso.png'}
        numTags={1}
        tag={['Traditional']}
        name={'creamy espresso'}
        description={'Traditional espresso with creamy foam'}
        price={'1.99'}
        />
        <CoffeeCard
        src={'../src/assets/coffees/gelado.png'}
        
        numTags={2}
        tag={['Traditional']}
        tag2={'Cold'}
        name={'Iced Espresso'}
        description={'Drink prepared with espresso coffee and ice cubes'}
        price={'1.99'}
        />
        <CoffeeCard
        src={'../src/assets/coffees/leite.png'}
        
        numTags={2}
        tag={['Traditional']}
        tag2={'with milk'}
        name={'Coffee with milk'}
        description={'Half and half traditional espresso with steamed milk'}
        price={'1.99'}
        />
        <CoffeeCard
        src={'../src/assets/coffees/latte.png'}
        numTags={2}
        tag={['Traditional', 'with milk']}
        name={'Latte'}
        description={'A shot of espresso with twice as much milk and creamy foam'}
        price={'1.99'}
        />
        <CoffeeCard
        src={'../src/assets/coffees/capuccino.png'}
        
        numTags={2}
        tag={['Traditional', 'with milk']}
        name={'Cappuccino'}
        description={'Cinnamon drink made from equal doses of coffee, milk and foam'}
        price={'1.99'}
        />
        <CoffeeCard
        src={'../src/assets/coffees/macchiato.png'}
        
        numTags={2}
        tag={['Traditional', 'with milk']}
        name={'Macchiato'}
        description={'Espresso coffee mixed with a little hot milk and foam'}
        price={'1.99'}
        />
        <CoffeeCard
        src={'../src/assets/coffees/mocaccino.png'}
        numTags={2}
        tag={['Traditional', 'with milk']}
        name={'Mocaccino'}
        description={'Espresso coffee with chocolate sauce, a little milk and foam'}
        price={'1.99'}
        />
        <CoffeeCard
        src={'../src/assets/coffees/chocolate.png'}
        numTags={2}
        tag={['Special', 'with milk']}
        name={'Hot chocolate'}
        description={'Drink made with chocolate dissolved in hot milk and coffee'}
        price={'1.99'}
        />
        <CoffeeCard
        src={'../src/assets/coffees/cubano.png'}    
        numTags={3}
        tag={['Special', 'alcoholic', 'cold']}
        name={'Cuban'}
        description={'Iced espresso drink with rum, cream and mint'}
        price={'1.99'}
        />
        <CoffeeCard
        src={'../src/assets/coffees/havaiano.png'}    
        numTags={1}
        tag={['Special']}
        name={'Hawaiian'}
        description={'Sweet drink prepared with coffee and coconut milk'}
        price={'1.99'}
        />
        <CoffeeCard
        src={'../src/assets/coffees/arabe.png'}    
        numTags={1}
        tag={['Special']}
        name={'Arabic'}
        description={'Drink prepared with Arabic coffee beans and spices'}
        price={'1.99'}
        />
        <CoffeeCard
        src={'../src/assets/coffees/irlandes.png'}    
        numTags={1}
        tag={['Special']}
        name={'Irish'}
        description={'Drink based on coffee, Irish whiskey, sugar and whipped cream'}
        price={'1.99'}
        />
      </div>
    </div>
  )
}
