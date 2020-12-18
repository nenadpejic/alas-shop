import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { firestore } from "../../services/fire";
import { formatDate } from "../../utilities/index";
import Receipt from "../../components/Receipt";
import "./style.scss";

const HistoryItem = () => {
  const [products, setProducts] = useState([]);
  const [createdAt, setCreatedAt] = useState();
  const [totalPrice, setTotalPrice] = useState(0);
  const { slug } = useParams();

  useEffect(() => {
    firestore
      .collection("receipts")
      .doc(slug)
      .get()
      .then((snapShot) => {
        if (snapShot.exists) {
          const data = snapShot.data();
          setTotalPrice(data.totalPrice);
          setProducts(data.products);
          setCreatedAt(formatDate(data.createdAt.toDate()));
        }
      })
      .catch((err) => console.log(err));
  }, [slug]);

  return (
    <main className="main">
      <div className="wrapper">
        <h1 className="title">List of products</h1>
        <p className="date">{createdAt}</p>
        <ul className="list-of-products">
          {products.map((product, index) => (
            <Receipt key={index} product={product} />
          ))}
        </ul>
        <div>{totalPrice}</div>
        <button className="back-to-history">
          <Link to="/history">Back to History</Link>
        </button>
        <button className="back-to-home">
          <Link to="/home">Start new list</Link>
        </button>
      </div>
    </main>
  );
};

export default HistoryItem;