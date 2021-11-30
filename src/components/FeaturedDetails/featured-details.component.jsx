import "./featured-details.style.scss";
import { Container, Row, Col } from "tailwind-react-ui";
import PokemonDetails from "../PokemonDetails/pokemon-details.component";

function FeaturedDetails({ name, abilities }) {
  const image = abilities.sprites.other["official-artwork"].front_default;
  const defaultType = abilities.types[0].type.name;
  return (
    <div className={`featured-details featured-details--${defaultType}`}>
      <Container>
        <Row>
          <Col w={{ def: "full" }} p={2}>
            <h1 className="featured-details__header">{name}</h1>
          </Col>
          <Col w={{ def: "full", md: "5/12" }} p={2}>
            <div className="featured-details__canvas">
              {image && (
                <img className="featured-details__img" src={image} alt={name} />
              )}
            </div>
          </Col>
          <Col w={{ def: "full", md: "7/12" }} p={2}>
            <div className="featured-details__stats">
              <PokemonDetails name={name} abilities={abilities} />
            </div>
          </Col>
          <Col w={{ def: "full" }} p={2}>
            <div className="featured-details__textbox">
              <h2 className="featured-details__textbox-title">Moves List</h2>
              <div className="featured-details__moves">
                {abilities.moves.map((single, index) => {
                  return (
                    <span key={index} className="featured-details__moves-type">
                      {single.move.name.replace("-", " ")}
                    </span>
                  );
                })}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FeaturedDetails;
