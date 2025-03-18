import React from 'react'
import { Ingridient } from './Ingridient'

export const IngredientList = ({ingridients}) => {
  const ingredientElements = ingridients.map((ele)=>{
    return (
      <Ingridient key={ele.id} {...ele}/>
    )
  })
  return (
    <div>
      {ingredientElements}
    </div>
  )
}
