import React from "react";
import ProductLI from "./ProductLI";
import "./style.scss";

const ProductUL = ({ productsListItem, removeItem }) => {
  return (
    <ul className="product-list">
      {productsListItem.map((elem, index) => (
        <ProductLI
          removeItem={removeItem}
          key={index}
          index={index}
          elem={elem}
        />
      ))}
    </ul>
  );
};
export default ProductUL;
