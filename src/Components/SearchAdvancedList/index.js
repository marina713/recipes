import React, { useState } from "react";
import { useDispatch } from "react-redux";
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
  const dispatch = useDispatch();
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
    ["cuisineType", "Cuisine"],
    ["health", "Health"],
    ["mealType", "Meal"],
    ["dishType", "Dish"],
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
  };

  const resetFilters = () => {
    dispatch(updateAdvancedSearch(""));
    setDropdownList(initialValues);
    setKeyDd(keyDd + 1);
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

  return (
    <MoreFiltersDivCol>
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
