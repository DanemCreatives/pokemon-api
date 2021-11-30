import "./card-list.style.scss";
import Card from "../Card/card.component";
import { ReactComponent as PokedexSvg } from "../../assets/img/pokedex.svg";
import { Container, Row, Col } from "tailwind-react-ui";

function CardList({ pokemon, limitHandler, isFiltered }) {
  let rows = [];
  let cols = [];

  pokemon.forEach((single, index) => {
    cols.push(
      <Col className="col" w={{ def: "full", xl: "1/3" }} p={2} key={index}>
        <Card index={index} name={single.name} url={single.url} />
      </Col>
    );
    if ((index + 1) % 3 === 0 || pokemon.length < 3) {
      rows.push(
        <div className="card-list__section" key={index}>
          <PokedexSvg className="card-list__title" />
          <Container>
            <Row>{cols}</Row>
          </Container>
        </div>
      );
      cols = [];
    }
  });

  return (
    <div className="card-list">
      {rows}
      <div className="card-list__actions">
        {!isFiltered && (
          <button className="card-list__btn el-btn" onClick={limitHandler}>
            Load More
          </button>
        )}
      </div>
    </div>
  );
}

export default CardList;
