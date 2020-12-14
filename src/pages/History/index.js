import React, { useEffect, useState } from "react";
import "./style.scss";
import { getReceipts } from "../../services/firestore";
import Receipt from "../../components/Receipt";

const History = () => {
  const [receipts, setReceipts] = useState([]);
  useEffect(() => {
    getReceipts()
      .then((snapShot) => {
        if (!snapShot.empty) {
          const docs = snapShot.docs;
          const arr = [];

          docs.forEach((doc) => {
            const data = doc.data();
            const id = doc.id;
            data.id = id;
            arr.push(data);
          });
          setReceipts(arr);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    console.log(receipts);
  }, [receipts]);

  return (
    <>
      <span className="receipt__date"></span>
      <h3>Lista kupovina</h3>
      <div className="receipts__wrapper">
        {
          <ul>
            {receipts.map((receipt) => (
              <Receipt receipt={receipt} />
            ))}
          </ul>
        }
      </div>
    </>
  );
};

export default History;
