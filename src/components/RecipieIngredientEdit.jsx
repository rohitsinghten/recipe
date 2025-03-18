import React from "react";

const RecipieIngredientEdit = ({ ingredient, handleIngredientChange }) => {
  const handleChange = (changes) => {
    handleIngredientChange(ingredient.id,{...ingredient, ...changes})
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "8px",
      }}
    >
      <input type="text" value={ingredient.name} onChange={e => handleChange({name : e.target.value})}/>
      <input type="text" value={ingredient.amount} onChange={e => handleChange({amount : e.target.value})}/>
      <button>Delete</button>
    </div>
  );
};

export default RecipieIngredientEdit;
