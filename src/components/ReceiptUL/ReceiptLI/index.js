import React from "react";

const ReceiptLI = ({ product }) => {
  return (
    <li className="receipt-list-item">
      <p>Name: {product.name}</p>
      <p>Suggested amount: 5</p>
      <p>Quantity: {product.quantity}</p>
    </li>
  );
};

export default ReceiptLI;
