import React from "react";
import "./style.scss";

const Receipt = ({ product }) => {
  return (
    <li className="receipt-list-item">
      <p>Name: {product.name}</p>
      <p>Quantity: {product.quantity}</p>
    </li>
  );
};

export default Receipt;
