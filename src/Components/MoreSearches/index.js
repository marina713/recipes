import React from "react";
import { updateShowMoreSearchesCounter } from "../../state/search/actions";
import { ShowMoreButton } from "../SearchAdvancedList/styles.js";
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
      <ShowMoreButton onClick={showMoreResults}>
        {t("MoreRecipes")}
      </ShowMoreButton>
    </div>
  );
};

export default MoreSearches;
