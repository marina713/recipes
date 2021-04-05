import React from "react";
import "./styles.css";
import HealthCategory from "./HealthCategory/";
import IngredientsList from "../IngredientsList/";

const Item = ({ label, image, healthLabels, ingredientsList, url }) => (
  <div className="item-wrap">
    <div>
      <div className="caption">{label}</div>
      <a href={url}>
        <img className="item-img" src={image} alt="" />
      </a>
      <HealthCategory data={healthLabels} />
      <IngredientsList ingredientsList={ingredientsList} />
    </div>
    <a href={url} className="item-button" target="_blank" rel="noreferrer">
      See recipe
    </a>
  </div>
);

export default Item;
