import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { Container, Image } from "./styles";
import enlang from "./en-lang.png";
import eslang from "./es-lang.png";
import { changeLanguage } from "../../state/search/actions";

const LanguagesList = () => {
  const { i18n } = useTranslation();
  const languages = ["en", "es"];
  const dispatch = useDispatch();

  const handleChangeLanguage = (lang) => {
    dispatch(changeLanguage(lang));
    i18n.changeLanguage(lang);
  };

  const language = languages.map((lang, index) => (
    <Link key={index} to={`/${lang}`}>
      <button onClick={() => handleChangeLanguage(lang)}>
        <Image src={lang === "en" ? enlang : eslang} alt={`${lang} language`} />
      </button>
    </Link>
  ));

  return <Container>{language}</Container>;
};

export default LanguagesList;
