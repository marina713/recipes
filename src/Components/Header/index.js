import React from "react";
import logo from "./taco.svg";
import "./styles.css";

const Header = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo spin" alt="logo" />
      <h1>Find the yummiest recipes</h1>
      <img src={logo} className="App-logo spin-inverse" alt="logo" />
    </header>
  );
};

export default Header;
