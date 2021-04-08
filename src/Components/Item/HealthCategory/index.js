import React from "react";
import imgVeg from "./vegetarian.png";
import imgGlutenFree from "./gluten-free.png";
import imgEggFree from "./egg-free.png";
import imgDairyFree from "./dairy-free.png";
import { Container, Icon } from "./styles";

const HealthCategory = ({ data }) => {
  const isCategory = (healthLabelArray, category) =>
    healthLabelArray.includes(category);

  return (
    <Container>
      {isCategory(data, "Vegetarian") ? (
        <Icon src={imgVeg} alt="veg-recipe" />
      ) : null}
      {isCategory(data, "Gluten-Free") ? (
        <Icon src={imgGlutenFree} alt="gluten-free-recipe" />
      ) : null}
      {isCategory(data, "Egg-Free") ? (
        <Icon src={imgEggFree} alt="egg-free-recipe" />
      ) : null}
      {isCategory(data, "Dairy-Free") ? (
        <Icon src={imgDairyFree} alt="dairy-free-recipe" />
      ) : null}
    </Container>
  );
};

export default HealthCategory;
