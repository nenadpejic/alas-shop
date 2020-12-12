import React from "react";
import "./style.scss";

const SearchedUL = ({ filterProducts, handleProducts }) => {
  return (
    <ul className="searched-list">
      {filterProducts.map((elem, index) => (
        <li
          className="searched-item"
          onClick={() => handleProducts(elem)}
          key={index}
        >
          {elem.name}
        </li>
      ))}
    </ul>
  );
};

export default SearchedUL;
