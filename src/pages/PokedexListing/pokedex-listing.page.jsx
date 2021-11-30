import "./pokedex-listing.style.scss";
import CardList from "../../components/CardList/card-list.component";

function PokedexListing({ pokemon, limitHandler, isFiltered }) {
  return (
    <div className="page pokedex-listing">
      <CardList
        pokemon={pokemon}
        limitHandler={limitHandler}
        isFiltered={isFiltered}
      />
    </div>
  );
}

export default PokedexListing;
