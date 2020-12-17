import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { formatDate } from "../../utilities/index";
import "./style.scss";

const Receipts = ({ receipt }) => {
  const [isClicked, setIsClicked] = useState(false);
  const date = formatDate(receipt.createdAt.toDate());

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <>
      {isClicked ? (
        <Redirect to={`/history/${receipt.id}`} />
      ) : (
          <li className="shoping-list-item" onClick={handleClick}>
            {date}
          </li>
        )}
    </>
  );
};

export default Receipts;
