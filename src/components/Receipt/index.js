import React from "react";
import "./style.scss";

const Receipt = ({ product }) => {
  return (
    <li className="receipt-list-item">
      <p>Name: <span>{product.name}</span></p>
      <p>Quantity: <span>{product.quantity}</span></p>
    </li>
  );
};

export default Receipt;
