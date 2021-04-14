import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useTranslation } from "react-i18next";

// App components
import { updateLatestSearches } from "../state/search/actions";
import Header from "../Components/Header/";
import RecipesList from "../Components/ItemsList";
import SearchBar from "../Components/SearchBar";
import MoreSearches from "../Components/MoreSearches/";
import Footer from "../Components/Footer/";
import logo from "../Components/Header/taco.svg";
import { AppLogo } from "../Components/Header/styles";

// App styles
import { Container, FlexContainer } from "../styles";

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const query = useSelector((state) => state.search.query);
  const language = useSelector((state) => state.search.language);
  const advancedSearchQuery = useSelector(
    (state) => state.search.advancedSearchQuery
  );
  const showMoreSearchesClickCounter = useSelector(
    (state) => state.search.showMoreSearchesClickCounter
  );
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const app_key = "a3a8ac2f511a16ace35fd717243e04c1";
  const app_id = "ccddccff";
  const num_recipes = language === "en" ? 12 : 6;
  const url_prefix = language === "en" ? "api" : "test-es";

  useEffect(() => {
    let from = num_recipes * showMoreSearchesClickCounter;
    let to = num_recipes * (showMoreSearchesClickCounter + 1);
    const CORSByPass =
      language === "es" ? "https://thingproxy.freeboard.io/fetch/" : "";
    let url = `${CORSByPass}https://${url_prefix}.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_key}&from=${from}&to=${to}${advancedSearchQuery}`;

    console.log(url);

    const updateData = (resultData) => {
      if (showMoreSearchesClickCounter === 0) setData(resultData);
      else if (showMoreSearchesClickCounter > 0) {
        setData([...data, ...resultData]);
      }
      if (resultData.length !== 0) {
        dispatch(updateLatestSearches());
      }
    };

    setLoading(true);

    axios(url, { crossdomain: true })
      .then((response) =>
        updateData(response.data.hits.map((data) => data.recipe))
      )
      .catch((error) => console.log("Error fetching and parsing data", error))
      .finally(() => setLoading(false));
    // eslint-disable-next-line
  }, [advancedSearchQuery, query, showMoreSearchesClickCounter]);

  return (
    <Container>
      <Header />
      <SearchBar />
      <FlexContainer>
        {loading && data.length === 0 ? (
          <FlexContainer>
            <AppLogo src={logo} small fast doSpin alt="logo" />
            {"  "}
            <span>{t("Loading")}</span>
          </FlexContainer>
        ) : (
          <RecipesList data={data} />
        )}
      </FlexContainer>
      {data.length > 0 ? <MoreSearches /> : null}
      <Footer />
    </Container>
  );
}

export default Home;
