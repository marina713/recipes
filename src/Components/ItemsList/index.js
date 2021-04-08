import React from "react";
import Item from "../Item";
import { Container } from "./styles";
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

  return <Container>{items}</Container>;
};

export default ItemsList;
