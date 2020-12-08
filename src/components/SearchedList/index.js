import React from "react";
import "./style.scss";

const SearchedList = ({ searchedItem, createProductList }) => {
  return (
    // <div className="searched-list">
    <ul>
      {searchedItem.map((elem, index) => (
        <li onClick={() => createProductList(elem.food)} key={index}>
          {elem.food}
        </li>
      ))}
    </ul>
    // </div>
  );
};

export default SearchedList;
