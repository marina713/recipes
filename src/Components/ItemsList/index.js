import React from "react";
import Item from "../Item";
import "./styles.css";
import NoItems from "../NoItems";

const ItemsList = (props) => {
  const results = props.data;

  const items =
    results.length > 0 ? (
      results.map((item, index) => (
        <Item
          key={index}
          id={index}
          label={item.label}
          url={item.url}
          image={item.image}
          healthLabels={item.healthLabels}
          ingredientsList={item.ingredientLines}
        />
      ))
    ) : (
      <NoItems />
    );

  return <ul className="items-container"> {items} </ul>;
};

export default ItemsList;
