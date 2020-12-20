import React, { useEffect, useState } from "react";
import { getReceipts } from "../../services/firestore";
import Receipts from "../../components/Receipts";
import { Link } from "react-router-dom";
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
      <div className="wrapper">
        <h1>Lista kupovina</h1>
        <ul className="shopping-list">
          {receipts.map((receipt) => (
            <Receipts key={receipt.id} receipt={receipt} />
          ))}
        </ul>
        <button className="back-to-home">
          <Link to="/home">Create new list</Link>
        </button>
      </div>
    </main>
  );
};

export default History;
