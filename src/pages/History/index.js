import React, { useEffect, useState } from "react";
import { getReceipts } from "../../services/firestore";
import Receipts from "../../components/Receipts";
import "./style.scss";

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

  return (
    <main className="history">
      <h3>Lista kupovina</h3>
      <div className="receipts-wrapper">
        {
          <ul className="receipts-wrapper-listitem">
            {receipts.map((receipt) => (
              <Receipts key={receipt.id} receipt={receipt} />
            ))}
          </ul>
        }
      </div>
    </main>
  );
};

export default History;
