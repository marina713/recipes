import React from "react";
import Ingredient from "../Ingredient";
import "./styles.css";

const IngredientsList = ({ ingredientsList }) => {
  let ingredients;

  if (ingredientsList.length > 0) {
    ingredients = ingredientsList.map((ingredient, index) => (
      <Ingredient key={index} id={index} ingredient={ingredient} />
    ));
  }

  return <ul className="ingredients-container"> {ingredients} </ul>;
};

export default IngredientsList;
