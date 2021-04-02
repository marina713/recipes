const initialState = {
  searchText: "",
  query: "artichoke",
  advancedSearchQuery: "",
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_CHANGE":
      return { ...state, searchText: action.payload.value };

    case "SUBMIT_SEARCH": {
      return {
        ...state,
        query: state.searchText,
        searchText: "",
      };
    }
    case "UPDATE_ADVANCED_SEARCH": {
      return {
        ...state,
        advancedSearchQuery: action.payload.value,
      };
    }
    default:
      return state;
  }
};

export default searchReducer;
