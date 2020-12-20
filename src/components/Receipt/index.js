import React from "react";
import "./style.scss";

const Receipt = ({ product }) => {
  return (
    <li className="receipt-list-item">
      <p>{product.name}</p>
      <p>{product.quantity}</p>
      <p>{product.total}</p>
      <p>{product.price}</p>
    </li>
  );
};

export default Receipt;
