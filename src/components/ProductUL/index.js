import React, { useState } from "react";
import ProductLI from "./ProductLI";
import "./style.scss";

const ProductUL = ({ productsListItem, removeItem, fakeData }) => {
  const [products, setProducts] = useState([...productsListItem]);

  const handleQuantity = (product, operation) => {
    const newProducts = products.map((elem) => {
      if (operation === "+") {
        if (elem.name === product.name) {
          return {
            ...elem,
            quantity: elem.quantity + 1,
          };
        }
      } else if (operation === "-") {
        if (elem.name === product.name) {
          if (elem.quantity > 1) {
            return {
              ...elem,
              quantity: elem.quantity - 1,
            };
          }
        }
      }
      return {
        ...elem,
      };
    });
    setProducts(newProducts);
  };

  return (
    <ul className="product-list">
      {products.map((elem, index) => (
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
