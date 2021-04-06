import React from "react";
import "./styles.css";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { submitSearch } from "../../state/search/actions";

const LatestSearches = () => {
  const { t } = useTranslation();
  const latestSearches = useSelector((state) => state.search.latestSearches);
  const dispatch = useDispatch();

  let searches;
  let num_latestSearches = latestSearches.length;

  if (num_latestSearches > 0) {
    searches = latestSearches.map((s, index) => (
      <button
        key={index}
        onClick={() => dispatch(submitSearch(s))}
        className="latest-searches"
      >
        {s}
      </button>
    ));
  }

  return (
    <div className="latestsearches-box">
      <span className="latestsearches-title">
        {num_latestSearches > 0 ? t("LatestSearches") : null}
      </span>
      <ul className="latest-searches-container"> {searches} </ul>
    </div>
  );
};

export default LatestSearches;
