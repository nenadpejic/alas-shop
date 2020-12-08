import React from "react";
import "./style.scss";

const ProductUL = ({ productsListItem }) => {
  return (
    <ul className="product-list">
      {productsListItem.map((elem, index) => (
        <li className="list-item">
          <div className="product-wrapper">
            <p className="product-name">{elem}</p>
            <p className="suggested-amount">Suggested amount: 5</p>
          </div>

          <div className="btn-wrapper">
            <button className="minus" type="button"></button>
            <div className="amount">5</div>
            <button className="plus" type="button"></button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ProductUL;
