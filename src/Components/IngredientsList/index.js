import React from "react";
import Ingredient from "../Ingredient";
import { useTranslation } from "react-i18next";
import { Title, Container } from "./styles";

const IngredientsList = ({ ingredientsList }) => {
  const { t } = useTranslation();
  const numIngredients = ingredientsList.length;

  const ingredients =
    numIngredients > 0
      ? ingredientsList.map((ingredient, index) => (
          <Ingredient key={index} id={index} ingredient={ingredient} />
        ))
      : null;

  return (
    <>
      <Title>
        {t("Ingredients")}: {numIngredients}
      </Title>
      <Container>{ingredients}</Container>
    </>
  );
};

export default IngredientsList;
