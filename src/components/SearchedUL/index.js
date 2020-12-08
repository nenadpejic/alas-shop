import React from "react";
import "./style.scss";

const SearchedUL = ({ searchedListItem, handleProductList }) => {
  return (
    <ul className="searched-list">
      {searchedListItem.map((elem, index) => (
        <li onClick={() => handleProductList(elem.food)} key={index}>
          {elem.food}
        </li>
      ))}
    </ul>
  );
};

export default SearchedUL;
