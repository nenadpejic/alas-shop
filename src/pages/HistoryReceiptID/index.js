import React from "react";
import ReceiptUL from "../../components/ReceiptUL";
import { useParams } from "react-router-dom";

const HistoryReceiptID = () => {
  const { slug } = useParams();
  return (
    <div>
      <ReceiptUL slug={slug} />
    </div>
  );
};

export default HistoryReceiptID;
