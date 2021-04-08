import React from "react";
import { useTranslation } from "react-i18next";
import { Content, LogoContainer } from "./styles";
import { AppLogo } from "../Header/styles";
import logo from "../Header/taco.svg";

const NoItems = () => {
  const { t } = useTranslation();

  return (
    <Content>
      <LogoContainer>
        <AppLogo src={logo} isBlacked />
      </LogoContainer>
      <h2>{t("NoRecipes")}</h2>
      <h3>{t("NoRecipesSubtitle")}</h3>
    </Content>
  );
};

export default NoItems;
