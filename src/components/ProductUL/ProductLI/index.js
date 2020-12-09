import React, { useState } from "react";

const ProductLI = ({ elem, index, removeItem }) => {
  const [quantity, setQuantity] = useState(0);

  const handleQuantity = (param) => {
    if (param === "-") {
      setQuantity(quantity - 1);
    } else if (param === "+") {
      setQuantity(quantity + 1);
    }
  };

  return (
    <li className="list-item">
      <div>
        <button className="delete-item" type="button" onClick={() => removeItem(index)}></button>
      </div>
      <div className="product-wrapper">
        <p className="product-name">{elem}</p>
        <p className="suggested-amount">Suggested amount: 5</p>
      </div>

      <div className="btn-wrapper">
        <button
          onClick={() => handleQuantity("-")}
          className="minus"
          type="button"
        ></button>
        <div className="amount">{quantity}</div>
        <button
          onClick={() => handleQuantity("+")}
          className="plus"
          type="button"
        ></button>
      </div>
    </li>
  );
};

export default ProductLI;
