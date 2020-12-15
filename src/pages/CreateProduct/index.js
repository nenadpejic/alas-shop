import React, { useState } from "react";
import { createProduct } from "../../services/firestore";
import "./style.css";

const CreateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const data = {
    name: name,
    price: price,
  };

  const handleChange = (e) => {
    if (e.target.id === "name") {
      setName(e.target.value);
    } else if (e.target.id === "price") {
      setPrice(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createProduct(data)
      .then(() => console.log("Succefuly added"))
      .catch((err) => console.log("Cannot add document", err));
    setName("");
    setPrice("");
  };

  return (
    <div className="create-product">
      <div className="wrapper">
        <form onSubmit={handleSubmit} className="wrapper-form">
          <label>Name of product</label>
          <input
            onChange={handleChange}
            value={name}
            type="text"
            placeholder="Enter name of product..."
            id="name"
          />
          <label>Price of product</label>
          <input
            onChange={handleChange}
            value={price}
            type="text"
            placeholder="Enter price of product..."
            id="price"
          />
          <button type="submit">Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
