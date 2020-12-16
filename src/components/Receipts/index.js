import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { formatDate } from "../../utilities/index";
import "./style.scss";

const Receipts = ({ receipt }) => {
  const [test, setTest] = useState(false);
  const date = String(receipt.createdAt.toDate());

  const handleClick = () => {
    setTest(true);
  };
  return (
    <>
      {test ? (
        <Redirect to={`/history/${receipt.id}`} />
      ) : (
          <li className="shoping-list-item" onClick={handleClick}>
            {formatDate(date)}
          </li>
        )}
    </>
  );
};

export default Receipts;
