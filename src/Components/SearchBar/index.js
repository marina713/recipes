import React from "react";
import "./styles.css";
import SearchAdvancedList from "../SearchAdvancedList";
import SearchForm from "../SearchForm";

const SearchBar = () => {
  return (
    <div className="search-flexbox">
      <SearchForm />
      <SearchAdvancedList />
    </div>
  );
};

export default SearchBar;
