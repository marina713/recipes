// const urlParams = window.location.pathname
const urlParams = window.location.hash
  .replace("#", "")
  .split("/")
  .filter((item) => item !== "");
const urlLang = urlParams[0] || "en";
const splitUrlSearch = urlParams[1]
  ? urlParams[1].split("?")
  : urlLang === "en"
  ? "artichoke"
  : "alcachofa";
const urlSearch = splitUrlSearch[0];
const urlAdvancedSearch = `${splitUrlSearch[1] || ""}`;

const initialState = {
  searchText: "",
  query: urlSearch,
  advancedSearchQuery: urlAdvancedSearch,
  latestSearches: [urlSearch],
  showMoreSearchesClickCounter: 0,
  language: urlLang,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_CHANGE":
      return { ...state, searchText: action.payload.value };

    case "SUBMIT_SEARCH": {
      return {
        ...state,
        query: action.payload.value,
        showMoreSearchesClickCounter: 0,
      };
    }
    case "UPDATE_LATEST_SEARCHES": {
      return {
        ...state,
        searchText: "",
        latestSearches:
          state.searchText.length > 0
            ? [state.searchText].concat(state.latestSearches)
            : state.latestSearches,
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
        latestSearches: [],
      };
    }

    default:
      return state;
  }
};

export default searchReducer;