import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { submitSearch } from "../../state/search/actions";
import {
  LatestSearchesButton,
  LatestSearchesTitle,
  LatestSearchesDiv,
} from "./styles";

const LatestSearches = () => {
  const { t } = useTranslation();
  const latestSearches = useSelector((state) => state.search.latestSearches);
  const dispatch = useDispatch();

  let searches;
  let num_latestSearches = latestSearches.length;

  if (num_latestSearches > 0) {
    searches = latestSearches.map((s, index) => (
      <LatestSearchesButton
        key={index}
        onClick={() => dispatch(submitSearch(s))}
      >
        {s}
      </LatestSearchesButton>
    ));
  }

  return (
    <LatestSearchesDiv>
      <LatestSearchesTitle>
        {num_latestSearches > 0 ? t("LatestSearches") : null}
      </LatestSearchesTitle>
      <ul> {searches} </ul>
    </LatestSearchesDiv>
  );
};

export default LatestSearches;
