import React from "react";
import "./style.scss";

const Receipt = ({ product }) => {
  return (
    <li className="receipt-list-item">
      <p>Name: {product.name}</p>
      <p>Quantity: {product.quantity}</p>
      <p>Total: {product.total}</p>
      <p>Price: {product.price}</p>
    </li>
  );
};

export default Receipt;
