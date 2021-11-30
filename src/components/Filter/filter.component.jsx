import "./filter.style.scss";
import { useState } from "react";
import { MdFilterList, MdOutlineClose } from "react-icons/md";
import CategoryList from "../CategoryList/category-list.component";

function Filter({ selectedCategoriesHandler, categories }) {
  const [active, setActive] = useState(false);
  return (
    <div className="filter">
      <div className="filter__action">
        <div
          className="filter__cta"
          onClick={() => {
            setActive(!active);
          }}
        >
          <div className={`filter__icon-container ${active ? "active" : ""}`}>
            {active ? (
              <MdOutlineClose className="filter__icon" />
            ) : (
              <MdFilterList className="filter__icon" />
            )}
          </div>
          <span className="filter__text">Filter Pokemon</span>
        </div>
      </div>
      <div className="filter__categories">
        {active && (
          <CategoryList
            categories={categories}
            selectedCategoriesHandler={selectedCategoriesHandler}
          />
        )}
      </div>
    </div>
  );
}

export default Filter;
