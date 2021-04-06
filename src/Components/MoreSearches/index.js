import React from "react";
import "../SearchAdvancedList/styles.css";
import { updateShowMoreSearchesCounter } from "../../state/search/actions";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

const MoreSearches = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const showMoreResults = () => {
    dispatch(updateShowMoreSearchesCounter());
  };

  return (
    <div className="more-searches-box">
      <button className={"advance-search-button "} onClick={showMoreResults}>
        {t("MoreRecipes")}
      </button>
    </div>
  );
};

export default MoreSearches;
