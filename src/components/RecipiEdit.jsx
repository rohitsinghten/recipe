import React from "react";
import "./RecipiEdit.css"; // We'll create this CSS file next
import RecipieIngredientEdit from "./RecipieIngredientEdit";

export const RecipiEdit = ({ recipie, handleRecipieChange }) => {
  const { id, name, servings, cookTime, instructions, ingridients } = recipie;
  const handleChange = (changes) => {
    handleRecipieChange(id, { ...recipie, ...changes });
  };
  const handleIngredientChange = (id, ing) => {
    const newIngredients = [...ingridients];
    const index = newIngredients.findIndex((i) => i.id == id);
    newIngredients[index] = ing;
    handleChange({ ingridients: newIngredients });
  };
  return (
    <>
      <div className="recipe-edit">
        <div className="recipe-edit__header">
          <button className="recipe-edit__close-btn">&times;</button>
        </div>

        <div className="recipe-edit__form">
          <div className="recipe-edit__form-row">
            <label htmlFor="name" className="recipe-edit__label">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="recipe-edit__input"
              value={name}
              onChange={(e) => handleChange({ name: e.target.value })}
            />
          </div>

          <div className="recipe-edit__form-row">
            <label htmlFor="cookTime" className="recipe-edit__label">
              Cook Time
            </label>
            <input
              type="text"
              name="cookTime"
              id="cookTime"
              className="recipe-edit__input"
              value={cookTime}
              onChange={(e) => handleChange({ cookTime: e.target.value })}
            />
          </div>

          <div className="recipe-edit__form-row">
            <label htmlFor="servings" className="recipe-edit__label">
              Servings
            </label>
            <input
              type="number"
              min="1"
              name="servings"
              id="servings"
              className="recipe-edit__input"
              value={servings}
              onChange={(e) =>
                handleChange({ servings: parseInt(e.target.value) || "" })
              }
            />
          </div>

          <div className="recipe-edit__form-row">
            <label htmlFor="instructions" className="recipe-edit__label">
              Instructions
            </label>
            <textarea
              name="instructions"
              id="instructions"
              className="recipe-edit__input recipe-edit__instructions"
              value={instructions}
              onChange={(e) => handleChange({ instructions: e.target.value })}
            ></textarea>
          </div>
        </div>
      </div>
      <br />
      <div>
        <label>Ingredients</label>
        <div>
          <span style={{ marginRight: "150px" }}>Name</span>
          <span>Amount</span>

          <br />
          {ingridients.map((ele) => {
            return (
              <RecipieIngredientEdit
                key={ele.id}
                ingredient = {ele}
                handleIngredientChange={handleIngredientChange}
              />
            );
          })}
        </div>
      </div>
      <div>
        <button>Add Ingredient</button>
      </div>
    </>
  );
};
