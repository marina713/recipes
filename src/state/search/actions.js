export const onSearchChange = (value) => {
  return {
    type: "SEARCH_CHANGE",
    payload: { value },
  };
};

export const submitSearch = () => {
  return {
    type: "SUBMIT_SEARCH",
  };
};

export const updateAdvancedSearch = (value) => {
  return {
    type: "UPDATE_ADVANCED_SEARCH",
    payload: { value },
  };
};
