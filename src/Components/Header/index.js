import React from "react";
import logo from "./taco.svg";
import "./styles.css";
import LanguagesList from "../LanguagesList";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="header-container">
      <LanguagesList />
      <div className="App-header">
        <img src={logo} className="App-logo spin" alt="logo" />
        <h1>{t("Header")}</h1>
        <img src={logo} className="App-logo spin-inverse" alt="logo" />
      </div>
    </header>
  );
};

export default Header;
