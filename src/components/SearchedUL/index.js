import React, { useEffect } from "react";
import "./style.scss";

const SearchedUL = ({ searchedListItem, handleProductList }) => {
  useEffect(() => {
    console.log(searchedListItem);
  }, [searchedListItem]);

  return (
    <ul className="searched-list">
      {searchedListItem.map((elem, index) => (
        <li onClick={() => handleProductList(elem)} key={index}>
          {elem.name}
        </li>
      ))}
    </ul>
  );
};

export default SearchedUL;
