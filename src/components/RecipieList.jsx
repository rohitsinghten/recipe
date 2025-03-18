import React from 'react'
import { Recipie } from './Recipie'

export const RecipieList = ({recipieArray,handleAddRecipie,handleDelete,handleRecipieSelect,handleRecipieChange}) => {
  return (
    <>
      {
        recipieArray.map((ele)=>{
          return (
            <Recipie 
              key={ele.id} 
              {...ele}
              handleDelete = {handleDelete}
              handleRecipieSelect={handleRecipieSelect}
              handleRecipieChange = {handleRecipieChange}
            />
          )
        })
      }
      <button onClick={handleAddRecipie}>Add recipie</button>
    </>
  )
}

