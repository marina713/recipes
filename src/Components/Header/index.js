import React from "react";
import logo from "./taco.svg";
import LanguagesList from "../LanguagesList";
import { useTranslation } from "react-i18next";
import { Content, AppLogo, Title, Container } from "./styles";

const Header = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <LanguagesList />
      <Content>
        <AppLogo src={logo} doSpin isReverse alt="logo" />
        <Title>{t("Header")}</Title>
        <AppLogo src={logo} doSpin alt="logo" />
      </Content>
    </Container>
  );
};

export default Header;
