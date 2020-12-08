import React from "react";
import "./style.scss";

const ProductUL = ({ productsListItem }) => {
  return (
    <div className="productUL">
      <ul>
        {productsListItem.map((elem, index) => (
          <li>{elem}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductUL;
