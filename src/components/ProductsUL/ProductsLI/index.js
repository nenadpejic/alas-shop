import React from "react";
import { ReactComponent as Ellipsis } from "../../../assets/icons/ellipsis.svg";
import minus from "../../../assets/icons/minus.svg";
import plus from "../../../assets/icons/plus.svg";
import check from "../../../assets/icons/check.svg";
import trash from "../../../assets/icons/trash.svg";

const ProductsLI = ({
  elem,
  removeItem,
  handleQuantity,
  toggleItem,
  index,
}) => {
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
              Suggested quantity: {elem.suggQuantity}
            </p>
          )}
        </div>
        <div className="three-dots" onClick={() => toggleItem(index)}>
          <Ellipsis />
        </div>
      </div>

      {elem.toggled && (
        <div className="button-wrapper">
          <div
            // className="minus"
            onClick={() => handleQuantity(elem, "-")}
          >
            <img src={minus} alt="minus" />
          </div>
          <div
            // className="plus"
            onClick={() => handleQuantity(elem, "+")}
          >
            <img src={plus} alt="plus" />
          </div>
          <div
            // className="check"
            onClick={() => toggleItem(!index)}
          >
            <img src={check} alt="check" />
          </div>
          <div
            // className="delete-item"
            onClick={() => removeItem(elem)}
          >
            <img src={trash} alt="trash" />
          </div>
        </div>
      )}
    </li>
  );
};

export default ProductsLI;
