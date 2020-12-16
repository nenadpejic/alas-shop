import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { formatDate } from "../../utilities/index";
import "./style.scss";

const Receipts = ({ receipt }) => {
  const [isClicked, setIsClicked] = useState(false);
  const date = String(receipt.createdAt.toDate());

  const handleClick = () => {
    setIsClicked(true);
  };
  return (
    <>
      {isClicked ? (
        <Redirect to={`/history/${receipt.id}`} />
      ) : (
        <li className="listitem" onClick={handleClick}>
          {formatDate(date)}
        </li>
      )}
    </>
  );
};

export default Receipts;
