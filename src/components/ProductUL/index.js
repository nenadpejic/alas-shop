import React from "react";
import "./style.scss";

const ProductUL = ({ productsListItem }) => {
  return (
    <div className="productUL">
      <ul>
        {productsListItem.map((elem, index) => (
          <li key={index}>{elem}</li>
        ))}
      </ul>
      <button className="productUL-button" type="button">
        QR Code
      </button>
    </div>
  );
};

export default ProductUL;
