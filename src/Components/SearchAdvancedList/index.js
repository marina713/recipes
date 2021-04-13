import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { updateAdvancedSearch } from "../../state/search/actions";
import {
  MoreFiltersDivCol,
  ShowMoreButton,
  MoreFiltersDiv,
  UList,
} from "./styles";
import SearchAdvancedItem from "./SearchAdvancedItem";
import initialValues from "./variables";

const SearchAdvancedList = () => {
  const { t } = useTranslation();
  const history = useHistory();
  const dispatch = useDispatch();
  const searchText = useSelector((state) => state.search.searchText);
  const [showMoreFilters, setShowMoreFilters] = useState(false);
  const [keyDd, setKeyDd] = useState(0);

  const toggleShowMoreFilters = () => setShowMoreFilters(!showMoreFilters);

  const advancedSearchCategories = [
    "cuisineType",
    "health",
    "mealType",
    "dishType",
  ];

  const labelMap = new Map([
    ["cuisineType", t("Cuisine")],
    ["health", t("Health")],
    ["mealType", t("Meal")],
    ["dishType", t("Dish")],
  ]);

  let items;

  const selectItem = (item) =>
    setDropdownList([
      ...dropdownList.filter((i) => i.id !== item.id),
      {
        ...item,
        isSelected: !item.isSelected,
      },
    ]);

  const [dropdownList, setDropdownList] = useState(initialValues);

  const applyFilters = () => {
    const selectedElements = dropdownList.filter((item) => item.isSelected);
    const advancedSearchQuery = selectedElements
      .map((item) => `&${item.label}=${encodeURIComponent(item.ddElement)}`)
      .join("");
    dispatch(updateAdvancedSearch(advancedSearchQuery));
    setKeyDd(keyDd + 1);
    history.push(`${searchText}?${advancedSearchQuery}`);
  };

  const resetFilters = () => {
    dispatch(updateAdvancedSearch(""));
    setDropdownList(initialValues);
    setKeyDd(keyDd + 1);
    history.push(`${searchText}`);
  };

  if (showMoreFilters) {
    items = advancedSearchCategories.map((advancedSearchCategory, index) => (
      <SearchAdvancedItem
        key={`${keyDd}${index}`}
        id={index}
        title={labelMap.get(advancedSearchCategory)}
        listInitialState={false}
        dropdownList={dropdownList.filter(
          (item) => item.label === advancedSearchCategory
        )}
        handleSelectItem={selectItem}
      />
    ));
  }

  const handleClickDiv = (e) => {
    if (e.target.localName === "div") {
      setKeyDd(keyDd + 1);
    }
  };

  return (
    <MoreFiltersDivCol onClick={showMoreFilters ? handleClickDiv : null}>
      <ShowMoreButton
        className={showMoreFilters ? null : "unique-button-search"}
        onClick={toggleShowMoreFilters}
      >
        {t("MoreFilters")}
      </ShowMoreButton>
      {showMoreFilters ? (
        <MoreFiltersDivCol className="translate">
          <UList> {items} </UList>
          <MoreFiltersDiv>
            <ShowMoreButton onClick={applyFilters}>
              {t("ApplyFilters")}
            </ShowMoreButton>
            <ShowMoreButton onClick={resetFilters}>
              {t("ResetFilters")}
            </ShowMoreButton>
          </MoreFiltersDiv>
        </MoreFiltersDivCol>
      ) : null}
    </MoreFiltersDivCol>
  );
};

export default SearchAdvancedList;
