import React from "react";
import { useHistory } from "react-router-dom";
import {
  Form,
  Container,
  Title,
  SubTitle,
  Input,
  SearchContainer,
} from "./styles";
import { submitSearch, onSearchChange } from "../../state/search/actions";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

function SearchForm() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const searchText = useSelector((state) => state.search.searchText);
  const advancedSearchQuery = useSelector(
    (state) => state.search.advancedSearchQuery
  );
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitSearch(searchText));
    history.push(`${searchText}?${advancedSearchQuery}`);
    e.target.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Container>
        <Title> {t("SearchTitle")} </Title>
        <SubTitle> {t("SearchSubtitle")} </SubTitle>
        <SearchContainer>
          <Input
            type="search"
            onChange={(e) => dispatch(onSearchChange(e.target.value))}
            name="search"
            placeholder={t("SearchPlaceholder")}
          />
        </SearchContainer>
      </Container>
    </Form>
  );
}

export default SearchForm;
