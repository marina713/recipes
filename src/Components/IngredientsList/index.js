import React from "react";
import Ingredient from "../Ingredient";
import "./styles.css";
import "../Item/styles.css";

const IngredientsList = ({ ingredientsList }) => {
  let ingredients;

  if (ingredientsList.length > 0) {
    ingredients = ingredientsList.map((ingredient, index) => (
      <Ingredient key={index} id={index} ingredient={ingredient} />
    ));
  }

  return (
    <div>
      <span className="ingredients-title">Ingredients</span>
      <ul className="ingredients-container"> {ingredients} </ul>
    </div>
  );
};

export default IngredientsList;
