import React from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { updateShowMoreSearchesCounter } from "../../state/search/actions";
import { ShowMoreButton } from "../SearchAdvancedList/styles.js";
import { Container } from "./styles";

const MoreSearches = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const showMoreResults = () => {
    dispatch(updateShowMoreSearchesCounter());
  };

  return (
    <Container>
      <ShowMoreButton onClick={showMoreResults}>
        {t("MoreRecipes")}
      </ShowMoreButton>
    </Container>
  );
};

export default MoreSearches;
