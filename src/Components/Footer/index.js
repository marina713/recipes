import React from "react";
import { useTranslation } from "react-i18next";
import { Content, Container, ContainerImg, Icon, Link } from "./styles";
import email from "./email.png";
import github from "./github.png";
import linkedin from "./linkedin.png";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Content>{t("Footer")}</Content>
      <ContainerImg>
        <Link href="mailto: marinamasp@gmail.com" target="_blank">
          <Icon src={email} alt="email" />{" "}
        </Link>
        <Link href="https://github.com/marina713" target="_blank">
          <Icon src={github} alt="github" />{" "}
        </Link>
        <Link
          href="https://www.linkedin.com/in/marina-mas-perez/"
          target="_blank"
        >
          <Icon src={linkedin} alt="linkedin" />{" "}
        </Link>
      </ContainerImg>
    </Container>
  );
};

export default Footer;
