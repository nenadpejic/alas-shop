import React, { useState, useEffect } from "react";
// import { getLatestReceipt, getReceipts } from "../../services/firestore";
import ReceiptLI from "./ReceiptLI";
import { firestore } from "../../services/fire";
import "./style.scss";

const ReceiptUL = ({ slug }) => {
  const [products, setProducts] = useState([]);
  const [createdAt, setCreatedAt] = useState();

  //catch latest made receipt
  useEffect(() => {
    firestore
      .collection("receipts")
      .doc(slug)
      .get()
      .then((snapShot) => {
        if (snapShot.exists) {
          const data = snapShot.data();
          setProducts(data.products);
          setCreatedAt(data.createdAt.toDate());
        }
      })
      .catch((err) => console.log(err));
  }, [slug]);

  return (
    <div className="receiptID">
      <p className="receiptID-para">{createdAt?.toLocaleTimeString()}</p>
      <ul className="receiptID-ul">
        {products.map((product, index) => (
          <ReceiptLI key={index} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default ReceiptUL;
