import "./pokemon-details.style.scss";
import { Row, Col } from "tailwind-react-ui";
import { useParams } from "react-router-dom";

function PokemonDetails({ name, abilities }) {
  const params = useParams();

  return (
    <div className="pokemon-details">
      {typeof params.id == "undefined" && (
        <h2 className="pokemon-details__header">{name.replace("-", " ")}</h2>
      )}
      <div className="pokemon-details__categories">
        <Row className="pokemon-details__row-categories">
          <Col w={{ def: "4/12" }}>
            <div className="pokemon-details__title">Type:</div>
          </Col>
          <Col w={{ def: "8/12" }}>
            <div className="pokemon-details__value">
              {abilities.types.map((single, index) => {
                return (
                  <span key={index} className="pokemon-details__value-type">
                    {single.type.name}
                  </span>
                );
              })}
            </div>
          </Col>
        </Row>
        <Row className="pokemon-details__row-categories">
          <Col w={{ def: "4/12" }}>
            <div className="pokemon-details__title">Abilities:</div>
          </Col>
          <Col w={{ def: "8/12" }}>
            <div className="pokemon-details__value">
              {abilities.abilities.map((single, index) => {
                return (
                  <span key={index} className="pokemon-details__value-type">
                    {single.ability.name.replace("-", " ")}
                  </span>
                );
              })}
            </div>
          </Col>
        </Row>
      </div>
      <div className="pokemon-details__assets">
        {abilities.stats.map((single, index) => {
          return (
            <Row
              key={index}
              className={`pokemon-details__row-assets pokemon-details__row-assets--${single.stat.name}`}
            >
              <Col w={{ def: "4/12" }}>
                <div className="pokemon-details__attribute">
                  {single.stat.name.replace("-", " ")}:
                </div>
              </Col>
              <Col w={{ def: "8/12" }}>
                <div className="pokemon-details__worth">
                  <div className="pokemon-details__gauge">
                    <span
                      className="pokemon-details__fill"
                      style={{
                        width: `${
                          single.base_stat > 100 ? 100 : single.base_stat
                        }%`,
                      }}
                    ></span>
                  </div>
                  <div className="pokemon-details__digit">
                    {single.base_stat}
                  </div>
                </div>
              </Col>
            </Row>
          );
        })}
      </div>
    </div>
  );
}

export default PokemonDetails;
