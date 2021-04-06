import React from "react";
import "./styles.css";
import SearchAdvancedList from "../SearchAdvancedList";
import SearchForm from "../SearchForm";
import LatestSearches from "../LatestSearches";

const SearchBar = () => {
  return (
    <div className="search-flexbox">
      <div className="search-flexbox column">
        <SearchForm />
        <LatestSearches />
      </div>
      <SearchAdvancedList />
    </div>
  );
};

export default SearchBar;
