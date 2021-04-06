const initialState = {
  searchText: "",
  query: "artichoke",
  advancedSearchQuery: "",
  showMoreSearchesClickCounter: 0,
  language: "en",
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
        showMoreSearchesClickCounter: 0,
      };
    }
    case "UPDATE_ADVANCED_SEARCH": {
      return {
        ...state,
        advancedSearchQuery: action.payload.value,
        showMoreSearchesClickCounter: 0,
      };
    }
    case "SHOW_MORE_SEARCHES_CLICKED": {
      return {
        ...state,
        showMoreSearchesClickCounter: state.showMoreSearchesClickCounter + 1,
      };
    }

    case "CHANGE_LANGUAGE": {
      return {
        ...state,
        searchText: "",
        query: action.payload.value === "en" ? "artichoke" : "alcachofa",
        advancedSearchQuery: "",
        showMoreSearchesClickCounter: 0,
        language: action.payload.value,
      };
    }

    default:
      return state;
  }
};

export default searchReducer;
