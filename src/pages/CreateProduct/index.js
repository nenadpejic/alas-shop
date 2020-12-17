import React, { useState } from "react";
import { createProduct } from "../../services/firestore";
import "./style.scss";

const CreateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleChange = (e) => {
    if (e.target.id === "name") {
      setName(e.target.value);
    } else if (e.target.id === "price") {
      setPrice(Number(e.target.value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      price: price,
    };
    createProduct(data)
      .then(() => console.log("Succefuly added"))
      .catch((err) => console.log("Cannot add document", err));
    setName("");
    setPrice("");
  };

  return (
    <main className="main">
      <div className="wrapper">
        <h1>Create product</h1>
        <form className="create-product-form" onSubmit={handleSubmit}>
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
          <button className="submitBtn" type="submit">Add Product</button>
        </form>
      </div>
    </main>
  );
};

export default CreateProduct;
