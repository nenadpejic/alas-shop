import React from "react";
import "./style.scss";

const SearchedUL = ({ searchedListItem, handleProductList }) => {
  return (
    <div className="searchedUL">
      <ul>
        {searchedListItem.map((elem, index) => (
          <li onClick={() => handleProductList(elem.food)} key={index}>
            {elem.food}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchedUL;
