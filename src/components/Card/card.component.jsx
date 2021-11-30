import React from "react";
import "./card.style.scss";
import PokemonDetails from "../PokemonDetails/pokemon-details.component";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Card({ name, url, index }) {
  const [abilities, setAbilities] = useState([]);
  const [loading, setLoading] = useState(true);
  let markup = [];

  const fetchData = () => {
    axios
      .get(url)
      .then((results) => {
        setAbilities(results.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  if (!loading) {
    const image = abilities.sprites.other["official-artwork"].front_default;
    markup.push(
      <Link key={index} to={`/${name}`} className="card">
        <div className="card__canvas">
          {image && <img className="card__img" src={image} alt={name} />}
        </div>
        <PokemonDetails name={name} abilities={abilities} />
      </Link>
    );
  }

  return <React.Fragment>{markup}</React.Fragment>;
}

export default Card;
