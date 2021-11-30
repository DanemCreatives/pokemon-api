import "./category-list.style.scss";
import { useNavigate } from "react-router-dom";

function CategoryList({ selectedCategoriesHandler, categories }) {
  const navigate = useNavigate();
  return (
    <div className="category-list">
      {categories.map((single, key) => {
        return (
          <div key={key} className="filter__category">
            <input
              type="radio"
              id={key + 1}
              name="cats"
              value={key + 1}
              onChange={(e) => {
                selectedCategoriesHandler(e);
                navigate("/");
              }}
            />
            <label htmlFor={key + 1}>{single.name}</label>
          </div>
        );
      })}
    </div>
  );
}

export default CategoryList;
