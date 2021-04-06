import React from "react";
import "./styles.css";
import enlang from "./en-lang.png";
import eslang from "./es-lang.png";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
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
    <button key={index} onClick={() => handleChangeLanguage(lang)}>
      <img
        src={lang === "en" ? enlang : eslang}
        alt={`${lang} language`}
        className="lang-img"
      />
    </button>
  ));

  return <ul className="languages-container"> {language} </ul>;
};

export default LanguagesList;
