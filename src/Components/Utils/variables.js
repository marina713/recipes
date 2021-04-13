export const getInitialSearchByLang = (lang) =>
  lang === "en" ? "artichoke" : "alcachofa";

export const getInitialURLParams = (initialSearch = null) => {
  const params = window.location.hash
    .replace("#", "")
    .split("/")
    .filter((item) => item !== "");
  const lang = params[0] || "en";
  const URLsearch = params[1];

  const splitUrlSearch = [
    URLsearch
      ? URLsearch.split("?")
      : initialSearch || getInitialSearchByLang(lang),
  ];

  const search = splitUrlSearch[0];
  const advancedSearch = `${splitUrlSearch[1] || ""}`;

  return { lang, search, advancedSearch };
};
