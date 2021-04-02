import React from "react";
import "./styles.css";
import HealthCategory from "./HealthCategory/index.js";

const Item = (props) => (
  <div className="item-wrap">
    <div className="caption">{props.label}</div>
    <img className="item-img" src={props.image} alt="" />
    <HealthCategory data={props.healthLabels} />
    <a
      href={props.url}
      className="item-button"
      target="_blank"
      rel="noreferrer"
    >
      See recipe
    </a>
  </div>
);

export default Item;
