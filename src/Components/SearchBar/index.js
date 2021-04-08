import React from "react";
import SearchAdvancedList from "../SearchAdvancedList";
import SearchForm from "../SearchForm";
import LatestSearches from "../LatestSearches";
import { Container } from "./styles";

const SearchBar = () => {
  return (
    <Container>
      <Container className="column">
        <SearchForm />
        <LatestSearches />
      </Container>
      <SearchAdvancedList />
    </Container>
  );
};

export default SearchBar;
