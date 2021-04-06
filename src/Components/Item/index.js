import React from "react";
import "./styles.css";
import HealthCategory from "./HealthCategory/";
import IngredientsList from "../IngredientsList/";
import { useTranslation } from "react-i18next";

const Item = ({ label, image, healthLabels, ingredientsList, url }) => {
  const { t } = useTranslation();

  return (
    <div className="item-wrap">
      <div className="caption">{label}</div>
      <a href={url} className="a-img">
        <img className="item-img" src={image} alt="" />
      </a>
      <div className="recipe-content">
        <div>
          <HealthCategory data={healthLabels} />
          <IngredientsList ingredientsList={ingredientsList} />
        </div>
        <a href={url} className="item-button" target="_blank" rel="noreferrer">
          {t("SeeRecipe")}
        </a>
      </div>
    </div>
  );
};

export default Item;
