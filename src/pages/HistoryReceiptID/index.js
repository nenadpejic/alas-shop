import React from "react";
import ReceiptUL from "../../components/ReceiptUL";
import { useParams, Link } from "react-router-dom";

const HistoryReceiptID = () => {
  const { slug } = useParams();
  return (
    <div>
      <ReceiptUL slug={slug} />
      <button>
        <Link to="/home">Back to Home</Link>
      </button>
    </div>
  );
};

export default HistoryReceiptID;
