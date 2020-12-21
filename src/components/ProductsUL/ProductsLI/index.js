import React from "react";

const ProductsLI = ({ elem, removeItem, handleQuantity }) => {
  return (
    <li className="list-item">
      <div className="content-wrapper">
        <div className="text-LI">
          <div className="product-wrapper">
            <p className="product-name">{elem.name}</p>
            <p className="amount">{elem.quantity}</p>
            <p className="product-price">{elem.price} rsd</p>
          </div>
          {elem.suggQuantity && (
            <p className="suggested-amount">
              Suggested quantity: ({elem.suggQuantity})
            </p>
          )}
        </div>
        <div className="three-dots">
          <p>&#9675;</p>
          <p>&#9675;</p>
          <p>&#9675;</p>
        </div>
      </div>
      <div className="button-wrapper open">
        <button
          className="minus"
          type="button"
          onClick={() => handleQuantity(elem, "-")}
        >-</button>
        <button
          className="plus"
          type="button"
          onClick={() => handleQuantity(elem, "+")}
        >+</button>
        <button></button>
        <button
          className="delete-item"
          type="button"
          onClick={() => removeItem(elem)}>
        </button>
      </div>
    </li>
  );
};

export default ProductsLI;