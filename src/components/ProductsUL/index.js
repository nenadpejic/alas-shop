import React from "react";
import ProductsLI from "./ProductsLI";
import "./style.scss";

const ProductsUL = ({ removeItem, handleQuantity, products }) => {
  return (
    <ul className="product-list">
      {products?.map((elem, index) => (
        <ProductsLI
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
export default ProductsUL;
