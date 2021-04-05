import React from "react";
import "./styles.css";

const Ingredient = ({ ingredient }) => {
  return <li className="ingredient"> {ingredient} </li>;
};

export default Ingredient;
