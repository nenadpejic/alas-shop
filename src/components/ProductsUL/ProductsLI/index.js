import React from "react";

const ProductsLI = ({ elem, removeItem, handleQuantity }) => {
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
        {elem.suggQuantity && (
          <p className="suggested-amount">
            Suggested quantity: {elem.suggQuantity}
          </p>
        )}
        <p className="product-price">{elem.price} rsd</p>
      </div>

      <div className="btn-wrapper">
        <button
          className="minus"
          type="button"
          onClick={() => handleQuantity(elem, "-")}
        >
          <span className="minus-span">-</span>
        </button>

        <div className="amount">{elem.quantity}</div>

        <button
          className="plus"
          type="button"
          onClick={() => handleQuantity(elem, "+")}
        >
          <span className="plus-span">+</span>
        </button>
      </div>
    </li>
  );
};

export default ProductsLI;
