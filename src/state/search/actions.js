export const onSearchChange = (value) => {
  return {
    type: "SEARCH_CHANGE",
    payload: { value },
  };
};

export const submitSearch = (value) => {
  return {
    type: "SUBMIT_SEARCH",
    payload: { value },
  };
};

export const updateAdvancedSearch = (value) => {
  return {
    type: "UPDATE_ADVANCED_SEARCH",
    payload: { value },
  };
};

export const updateShowMoreSearchesCounter = () => {
  return {
    type: "SHOW_MORE_SEARCHES_CLICKED",
  };
};

export const changeLanguage = (value) => {
  return {
    type: "CHANGE_LANGUAGE",
    payload: { value },
  };
};
