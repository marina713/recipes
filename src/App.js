import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Header from "./Components/Header/";
import RecipesList from "./Components/ItemsList";
import SearchBar from "./Components/SearchBar";
import MoreSearches from "./Components/MoreSearches/";
import { initialiseTranslation } from "./translation/";
import { Container } from "./styles";

initialiseTranslation();

function App() {
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

  useEffect(() => {
    const app_key = "a3a8ac2f511a16ace35fd717243e04c1";
    const app_id = "ccddccff";
    const num_recipes = 12;
    const url_prefix = language === "en" ? "api" : "test-es";
    let from = num_recipes * showMoreSearchesClickCounter;
    let to = num_recipes * (showMoreSearchesClickCounter + 1);
    const CORSByPass =
      language === "es" ? "https://cors-anywhere.herokuapp.com/" : "";
    let url = `${CORSByPass}https://${url_prefix}.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_key}&from=${from}&to=${to}${advancedSearchQuery}`;

    console.log(url);

    const updateData = (resultData) => {
      if (showMoreSearchesClickCounter === 0) setData(resultData);
      else if (showMoreSearchesClickCounter > 0) {
        setData([...data, ...resultData]);
      }
    };

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
      <div> {loading ? <p>Loading...</p> : <RecipesList data={data} />} </div>
      <MoreSearches />
    </Container>
  );
}

export default App;
