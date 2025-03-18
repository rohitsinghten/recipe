import React from 'react'
import { IngredientList } from './IngredientList'

export const Recipie = ({id,name,servings,cookTime,instructions,ingridients,handleDelete,handleRecipieSelect}) => {

  return (
    <div>
      <div className='Header'>
        <h3>{name}</h3>
        <div>
          <button onClick={()=> handleRecipieSelect(id)}>Edit</button>
          <button onClick={() => handleDelete(id) }>Delete</button>
        </div>
      </div>

      <div>
        <span>Cook time: </span>
        <span>{cookTime}</span>
      </div>
      <div>
        <span>Servings: </span>
        <span>{servings}</span>
      </div>
      <div>
        <span>Instructions: </span>
        <div>
         {instructions}
        </div>
      </div>
      <div>
        <span>Ingredients: </span>
        <IngredientList ingridients={ingridients}/>
      </div>
    </div>
  )
}
