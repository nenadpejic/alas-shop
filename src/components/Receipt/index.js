import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "./style.scss";

const Receipt = ({ receipt }) => {
  const [test, setTest] = useState(false);
  const date = receipt.createdAt.toDate();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  const handleClick = () => {
    setTest(true);
    console.log(receipt);
  };
  return (
    <>
      {test ? (
        <Redirect to={`/history/${receipt.id}`} />
      ) : (
        <li onClick={handleClick}>{String(receipt.createdAt.toDate())}</li>
      )}
    </>
  );
};

export default Receipt;
