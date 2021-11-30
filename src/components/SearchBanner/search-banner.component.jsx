import "./search-banner.style.scss";
import Search from "../Search/search.component";
import Filter from "../Filter/filter.component";
import { Container, Row, Col } from "tailwind-react-ui";

function SearchBanner({
  filterActiveHandler,
  selectedCategoriesHandler,
  categories,
}) {
  return (
    <div className="search-banner">
      <Container>
        <Row>
          <Col w={{ def: "full", lg: "1/2" }} p={3}>
            <h1 className="search-banner__header">
              Welcome to the <span>Pokedex.</span>
            </h1>
          </Col>
          <Col w={{ def: "full", lg: "1/2" }} p={3}>
            <div className="search-banner__intro">
              <div className="search-banner__textbox">
                <p className="search-banner__paragraph">
                  The comprehensive database of Pokemon from the original Blue
                  and Red version.
                </p>
                <p className="search-banner__flag">
                  Find your favorite and check out their stats.
                </p>
              </div>
              <Search filterActiveHandler={filterActiveHandler} />
            </div>
          </Col>
        </Row>
        <Row>
          <Col p={3}>
            <Filter
              selectedCategoriesHandler={selectedCategoriesHandler}
              categories={categories}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SearchBanner;
