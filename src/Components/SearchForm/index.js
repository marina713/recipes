import React from "react";
import "./styles.css";
import { submitSearch, onSearchChange } from "../../state/search/actions";
import { useDispatch } from "react-redux";

function SearchForm() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitSearch());
    console.log(e);
    e.target.reset();
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-flexbox">
        <div className="search">
          <h1>Search a recipe</h1>
          <h4>Click on search icon, then type your keyword.</h4>
          <div className="search-box">
            <input
              type="search"
              onChange={(e) => dispatch(onSearchChange(e.target.value))}
              name="search"
              placeholder="Search..."
            />
          </div>
        </div>
      </div>
    </form>
  );
}

export default SearchForm;
