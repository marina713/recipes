import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Content, LogoContainer, HighlightedText } from "./styles";
import { AppLogo } from "../Header/styles";
import logo from "../Header/taco.svg";

const NoItems = () => {
  const { t } = useTranslation();
  const searchText = useSelector((state) => state.search.query);

  return (
    <Content>
      <LogoContainer>
        <AppLogo src={logo} isBlacked />
      </LogoContainer>
      <h2>
        {t("NoRecipes")} <HighlightedText>{searchText}</HighlightedText> :(
      </h2>
      <h3>{t("NoRecipesSubtitle")}</h3>
    </Content>
  );
};

export default NoItems;
