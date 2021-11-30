import "./App.css";
import PokedexListing from "./pages/PokedexListing/pokedex-listing.page";
import PokedexSingle from "./pages/PokedexSingle/pokedex-single.page";
import SearchBanner from "./components/SearchBanner/search-banner.component";
import Footer from "./components/Footer/footer.component";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  let [loading, setLoading] = useState(true);
  let [filtered, setFiltered] = useState(false);
  let [limit, setLimit] = useState(6);
  const [categories, setCategories] = useState([]);
  const [pokemon, setPokemon] = useState([]);
  const [totalPokemon, setTotalPokemon] = useState([]);

  const fetchTotalData = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=9999`)
      .then((results) => {
        setTotalPokemon(results.data.results);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const fetchLimitedData = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
      .then((results) => {
        setPokemon(results.data.results);
      })
      .catch((err) => console.log(err));
  };

  const fetchTypesData = () => {
    axios
      .get(`https://pokeapi.co/api/v2/type`)
      .then((results) => {
        setCategories(results.data.results);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchLimitedData();
  }, [limit]);

  useEffect(() => {
    fetchTotalData();
  }, []);

  useEffect(() => {
    fetchTypesData();
  }, []);

  const filterActiveHandler = (e) => {
    const filteredPokemon = totalPokemon.filter((single) => {
      return single.name.includes(e.toLowerCase());
    });
    setPokemon(filteredPokemon);
    setFiltered(true);
  };

  const selectedCategoriesHandler = (e) => {
    setLoading(true);
    let pokemonStored = [];
    axios
      .get(`https://pokeapi.co/api/v2/type/${e.target.value}`)
      .then((results) => {
        results.data.pokemon.map((single) => {
          pokemonStored.push(single.pokemon);
        });
        setPokemon(pokemonStored);
        setFiltered(true);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const limitHandler = () => {
    setLimit((limit = limit + 6));
  };

  return (
    <div className="App">
      <SearchBanner
        filterActiveHandler={filterActiveHandler}
        selectedCategoriesHandler={selectedCategoriesHandler}
        categories={categories}
      />
      <Routes>
        <Route
          path="/"
          element={
            !loading && (
              <PokedexListing
                pokemon={pokemon}
                limitHandler={limitHandler}
                isFiltered={filtered}
              />
            )
          }
        />
        <Route
          path="/:id"
          element={!loading && <PokedexSingle pokemon={totalPokemon} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
