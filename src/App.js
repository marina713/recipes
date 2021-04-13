import React from "react";
import { useTranslation } from "react-i18next";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "./screens/Home";
import { initialiseTranslation } from "./translation/";
import { Container } from "./styles";

initialiseTranslation();

function App() {
  const { t } = useTranslation();

  const initialPath = () => {
    const urlParams = window.location.hash
      .replace("#", "")
      .split("/")
      .filter((item) => item !== "");
    const urlLang = urlParams[0] || "en";

    const splitUrlSearch = [
      urlParams[1] ? urlParams[1].split("?") : t("InitialSearch"),
    ];
    const urlSearch = splitUrlSearch[0];
    const urlAdvancedSearch = `?${splitUrlSearch[1] || ""}`;

    return `/${urlLang}/${urlSearch}${urlAdvancedSearch}`;
  };

  return (
    <HashRouter>
      <Container>
        <Switch>
          <Route exact path="/:lang/:search" render={() => <Home />} />
          <Route path="/">
            <Redirect to={initialPath()} />
          </Route>
        </Switch>
      </Container>
    </HashRouter>
  );
}

export default App;
