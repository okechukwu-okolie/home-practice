import React from 'react'

const List = () => {
    const fruits=[
        {name:'BANANA    ',calories:123},
        {name:'KIWI   ',calories:111},
        {name:'SOURSOUP   ',calories:102},
        {name:'APPLE   ',calories:108}
    ]
    // fruits.sort() 
    
    const filterList = fruits.filter(fruit =>fruit.calories > 110 )
    const fruitList =filterList.map(frui=><p className='text-3xl'>{frui.name}--{frui.calories}</p>)
  return (

      <>
      
      <ul>{fruitList}</ul>

      </>

    
  )
}

export default List
