import React from "react";
import "./styles.css";
import imgVeg from "./vegetarian.png";
import imgGlutenFree from "./gluten-free.png";
import imgEggFree from "./egg-free.png";
import imgDairyFree from "./dairy-free.png";

const HealthCategory = ({ data }) => {
  const isCategory = (healthLabelArray, category) =>
    healthLabelArray.includes(category);

  return (
    <div className="categories-wrap">
      {isCategory(data, "Vegetarian") ? (
        <img className="img-health-category" src={imgVeg} alt="veg-recipe" />
      ) : null}
      {isCategory(data, "Gluten-Free") ? (
        <img
          className="img-health-category"
          src={imgGlutenFree}
          alt="gluten-free-recipe"
        />
      ) : null}
      {isCategory(data, "Egg-Free") ? (
        <img
          className="img-health-category"
          src={imgEggFree}
          alt="egg-free-recipe"
        />
      ) : null}
      {isCategory(data, "Dairy-Free") ? (
        <img
          className="img-health-category"
          src={imgDairyFree}
          alt="dairy-free-recipe"
        />
      ) : null}
    </div>
  );
};

export default HealthCategory;
