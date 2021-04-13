import { getInitialURLParams } from "../../Components/Utils/variables";

const initialURLParams = getInitialURLParams();

export const initialState = {
  searchText: "",
  query: initialURLParams.search,
  advancedSearchQuery: initialURLParams.advancedSearch,
  latestSearches: [initialURLParams.search],
  showMoreSearchesClickCounter: 0,
  language: initialURLParams.lang,
};
