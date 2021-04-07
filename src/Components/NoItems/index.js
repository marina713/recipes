import React from "react";
import { Content } from "./styles";
import { AppLogo } from "../Header/styles";
import logo from "../Header/taco.svg";

const NoItems = () => {
  return (
    <Content>
      <AppLogo src={logo} isBlacked />
      <h2>No Items found :(</h2>
      <h3>Try another search!</h3>
    </Content>
  );
};

export default NoItems;
