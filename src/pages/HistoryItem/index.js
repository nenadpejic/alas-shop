import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { firestore } from "../../services/fire";
import { formatDate } from "../../utilities/index";
import Receipt from "../../components/Receipt";
import "./style.scss";

const HistoryItem = () => {
  const [products, setProducts] = useState([]);
  const [createdAt, setCreatedAt] = useState();
  const { slug } = useParams();

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
      <div className="wrapper">
        <div className="wrapper-listitem">
          <p className="wrapper-para">{formatDate(createdAt)}</p>
          <ul className="wrapper-ul">
            {products.map((product, index) => (
              <Receipt key={index} product={product} />
            ))}
          </ul>
        </div>
        <div className="wrapper-button">
          <button>
            <Link to="/home">Back to Home</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HistoryItem;
