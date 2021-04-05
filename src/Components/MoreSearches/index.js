import React from "react";
import "../SearchAdvancedList/styles.css";
import { updateShowMoreSearchesCounter } from "../../state/search/actions";
import { useDispatch } from "react-redux";

const MoreSearches = () => {
  const dispatch = useDispatch();

  const showMoreResults = () => {
    dispatch(updateShowMoreSearchesCounter());
  };

  return (
    <div className="more-searches-box">
      <button className={"advance-search-button "} onClick={showMoreResults}>
        MOOORE YUMMY RECIPES
      </button>
    </div>
  );
};

export default MoreSearches;
