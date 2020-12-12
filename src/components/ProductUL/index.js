import React from "react";
import ProductLI from "./ProductLI";
import "./style.scss";

const ProductUL = ({ removeItem, handleQuantity, products }) => {
  return (
    <ul className="product-list">
      {products?.map((elem, index) => (
        <ProductLI
          removeItem={removeItem}
          key={index}
          index={index}
          elem={elem}
          handleQuantity={handleQuantity}
        />
      ))}
    </ul>
  );
};
export default ProductUL;
