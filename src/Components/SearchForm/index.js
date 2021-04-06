import React from "react";
import "./styles.css";
import { submitSearch, onSearchChange } from "../../state/search/actions";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

function SearchForm() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const searchText = useSelector((state) => state.search.searchText);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitSearch(searchText));
    console.log(e);
    e.target.reset();
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search">
        <h1> {t("SearchTitle")} </h1>
        <h4> {t("SearchSubtitle")} </h4>
        <div className="search-box">
          <input
            type="search"
            onChange={(e) => dispatch(onSearchChange(e.target.value))}
            name="search"
            placeholder={t("SearchPlaceholder")}
          />
        </div>
      </div>
    </form>
  );
}

export default SearchForm;
