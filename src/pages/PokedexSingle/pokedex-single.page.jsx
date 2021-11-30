import "./pokedex-single.style.scss";
import FeaturedDetails from "../../components/FeaturedDetails/featured-details.component";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function PokedexSingle({ pokemon }) {
  const params = useParams();
  const [abilities, setAbilities] = useState([]);
  const [loading, setLoading] = useState(true);

  const featuredPokemon = pokemon.filter((single) => {
    return single.name.includes(params.id);
  });

  useEffect(() => {
    axios
      .get(featuredPokemon[0].url)
      .then((results) => {
        setAbilities(results.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="page pokedex-single">
      {!loading && (
        <FeaturedDetails name={featuredPokemon[0].name} abilities={abilities} />
      )}
    </div>
  );
}

export default PokedexSingle;
