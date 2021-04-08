import React from "react";
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

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitSearch(searchText));
    console.log(e);
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
