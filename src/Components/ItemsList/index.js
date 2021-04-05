import React from "react";
import Item from "../Item";
import "./styles.css";

const ItemsList = (props) => {
  const results = props.data;

  let items;

  if (results.length > 0) {
    items = results.map((item, index) => (
      <Item
        key={index}
        id={index}
        label={item.label}
        url={item.url}
        image={item.image}
        healthLabels={item.healthLabels}
        ingredientsList={item.ingredientLines}
      />
    ));
  }
  // else {
  //   gifs = <NoGifs />
  // }

  return <ul className="items-container"> {items} </ul>;
};

export default ItemsList;
