import React from "react";
import { useTranslation } from "react-i18next";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "./screens/Home";
import { initialiseTranslation } from "./translation/";
import { Container } from "./styles";
import { getInitialURLParams } from "./Components/Utils/variables";

initialiseTranslation();

function App() {
  const { t } = useTranslation();

  const initialURL = getInitialURLParams(t("InitialSearch"));
  const advancedSearch = initialURL.advancedSearch
    ? `?${initialURL.advancedSearch}`
    : "";
  const initialPath = `/${initialURL.lang}/${initialURL.search}${advancedSearch}`;

  return (
    <HashRouter>
      <Container>
        <Switch>
          <Route exact path="/:lang/:search" render={() => <Home />} />
          <Route path="/">
            <Redirect to={initialPath} />
          </Route>
        </Switch>
      </Container>
    </HashRouter>
  );
}

export default App;
