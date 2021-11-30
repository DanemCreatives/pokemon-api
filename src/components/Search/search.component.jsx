import "./search.style.scss";
import { useNavigate } from "react-router-dom";

function Search({ filterActiveHandler }) {
  const navigate = useNavigate();
  let searchValue = "";
  return (
    <div className="search">
      <input
        className="search__input el-input"
        type="text"
        placeholder="Search the Pokedex"
        onChange={(e) => {
          searchValue = e.target.value;
        }}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            navigate("/");
            searchValue && filterActiveHandler(searchValue);
          }
        }}
      />
      <button
        className="search__btn el-btn"
        onClick={() => {
          navigate("/");
          searchValue && filterActiveHandler(searchValue);
        }}
      >
        Search
      </button>
    </div>
  );
}

export default Search;
