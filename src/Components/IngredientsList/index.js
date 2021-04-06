import React from "react";
import Ingredient from "../Ingredient";
import "./styles.css";
import "../Item/styles.css";
import { useTranslation } from "react-i18next";

const IngredientsList = ({ ingredientsList }) => {
  const { t } = useTranslation();

  let ingredients;
  const numIngredients = ingredientsList.length;
  if (numIngredients > 0) {
    ingredients = ingredientsList.map((ingredient, index) => (
      <Ingredient key={index} id={index} ingredient={ingredient} />
    ));
  }

  return (
    <div>
      <span className="ingredients-title">
        {t("Ingredients")}: {numIngredients}
      </span>
      <ul className="ingredients-container"> {ingredients} </ul>
    </div>
  );
};

export default IngredientsList;
