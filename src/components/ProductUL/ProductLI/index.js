import React from "react";

const ProductLI = ({ elem, removeItem, handleQuantity }) => {
  return (
    <li className="list-item">
      <div>
        <button
          className="delete-item"
          type="button"
          onClick={() => removeItem(elem)}
        ></button>
      </div>
      <div className="product-wrapper">
        <p className="product-name">{elem.name}</p>
        <p className="suggested-amount">Suggested amount: 5</p>
      </div>

      <div className="btn-wrapper">
        <button
          className="minus"
          type="button"
          onClick={() => handleQuantity(elem, "-")}
        ></button>
        <div className="amount">{elem.quantity}</div>
        <button
          className="plus"
          type="button"
          onClick={() => handleQuantity(elem, "+")}
        ></button>
      </div>
    </li>
  );
};

export default ProductLI;
