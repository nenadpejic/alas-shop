import React from "react";
import { ReactComponent as Ellipsis } from "../../../assets/icons/ellipsis.svg";
import { ReactComponent as Minus } from "../../../assets/icons/minus.svg";
import { ReactComponent as Plus } from "../../../assets/icons/plus.svg";
import { ReactComponent as Check } from "../../../assets/icons/check.svg";
import { ReactComponent as Trash } from "../../../assets/icons/trash.svg";

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
              Suggested quantity: <span className="suggested-amount-number"> {elem.suggQuantity} </span>
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
            className="minus"
            onClick={() => handleQuantity(elem, "-")}
          >
            <Minus />
          </div>
          <div
            className="plus"
            onClick={() => handleQuantity(elem, "+")}
          >
            <Plus />
          </div>
          <div
            // className="check"
            onClick={() => toggleItem(!index)}
          >
            <Check />
          </div>
          <div
            className="delete-item"
            onClick={() => removeItem(elem)}
          >
            <Trash />
          </div>
        </div>
      )}
    </li>
  );
};

export default ProductsLI;
