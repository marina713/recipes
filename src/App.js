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
    // const urlParams = window.location.pathname
    const urlParams = window.location.hash
      .replace("#", "")
      .split("/")
      .filter((item) => item !== "");
    const urlLang = urlParams[1] || "en";
    const urlSearch = urlParams[2] || t("InitialSearch");

    return `/${urlLang}/${urlSearch}`;
  };

  return (
    <HashRouter>
      <Container>
        <Switch>
          <Route path="/:lang/:search" render={() => <Home />} />
          <Route path="/">
            <Redirect to={initialPath()} />
          </Route>
        </Switch>
      </Container>
    </HashRouter>
  );
}

export default App;
