import "./App.css";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Header from "./Components/Header/";
import RecipesList from "./Components/ItemsList";
import SearchBar from "./Components/SearchBar";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const query = useSelector((state) => state.search.query);
  const advancedSearchQuery = useSelector(
    (state) => state.search.advancedSearchQuery
  );

  useEffect(() => {
    const app_key = "a3a8ac2f511a16ace35fd717243e04c1";
    const app_id = "ccddccff";
    const num_recipes = 12;
    let url = `https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_key}&from=0&to=${num_recipes}${advancedSearchQuery}`;

    console.log(url);

    axios(url)
      .then((response) =>
        setData(response.data.hits.map((data) => data.recipe))
      )
      .catch((error) => console.log("Error fetching and parsing data", error))
      .finally(() => setLoading(false));
  }, [advancedSearchQuery, query]);

  //console.log(data);

  return (
    <div className="App">
      <Header />
      <SearchBar />
      <div className="main-content">
        {loading ? <p>Loading...</p> : <RecipesList data={data} />}
      </div>
    </div>
  );
}

export default App;
