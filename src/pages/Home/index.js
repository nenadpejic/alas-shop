import React, { useState, useEffect } from "react";
import SearchedUL from "../../components/SearchedUL";
import ProductUL from "../../components/ProductUL";
import {
  getProducts,
  createReceipt,
  getReceipts,
} from "../../services/firestore";
import "./style.scss";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchProducts, setSearchProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [products, setProducts] = useState([]);

  //Catch products from firestore
  useEffect(() => {
    getProducts()
      .then((snapShot) => {
        if (!snapShot.empty) {
          const docs = snapShot.docs;
          const arr = [];
          docs.forEach((doc) => {
            const data = doc.data();
            data.quantity = 1;
            arr.push(data);
          });
          setSearchProducts(arr);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  //On change
  const handleChange = (e) => {
    setInputValue(e.target.value);
    let newData = searchProducts;
    newData = newData.filter((elem) =>
      elem.name.toLowerCase().includes(e.target.value)
    );
    setFilterProducts(newData);
  };

  //add item from searched list to products list
  const handleProducts = (product) => {
    let newProducts = products;
    newProducts.unshift(product);
    setProducts(newProducts);
    setInputValue("");

    //Filtring Searched List when pick one products
    let newData = searchProducts;
    newData = newData.filter((elem) => elem.name !== product.name);
    setSearchProducts(newData);
  };

  //Removing item from products List
  const removeItem = (product) => {
    let newProducts = products;
    newProducts = newProducts.filter((elem) => elem.name !== product.name);
    setProducts(newProducts);

    //Return removing item from products to searched list
    let newSearched = searchProducts;
    newSearched.unshift(product);
    setSearchProducts(newSearched);
  };

  //Change quantity of each products
  const handleQuantity = (product, operation) => {
    const newProducts = products.map((elem) => {
      if (operation === "+") {
        if (elem.name === product.name) {
          return {
            ...elem,
            quantity: elem.quantity + 1,
          };
        }
      } else if (operation === "-") {
        if (elem.name === product.name) {
          if (elem.quantity > 1) {
            return {
              ...elem,
              quantity: elem.quantity - 1,
            };
          }
        }
      }
      return {
        ...elem,
      };
    });
    setProducts(newProducts);
  };

  //Create Receipt
  const handleReceipt = () => {
    console.log(products);
    createReceipt(products)
      .then(() => console.log("Succefuly create receipt of products"))
      .catch((err) => "Cannot create receipt of products" + err);
  };

  //PROVERA ZA RECEPTE
  useEffect(() => {
    getReceipts()
      .then((snapShot) => {
        if (!snapShot.empty) {
          snapShot.docs.forEach((doc, i) => {
            console.log(doc.id);
            // console.log(doc.data());
            // const createdAt = doc.data().createdAt;
            // console.log(createdAt);
            // const date = createdAt.toDate();
            // console.log(date.toLocaleTimeString());
          });
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="home">
      <div className="wrapper">
        <div className="search-wrapper">
          <label>Search for food</label>
          <input
            type="text"
            placeholder="Enter food name..."
            onChange={handleChange}
            value={inputValue}
          />
        </div>
        <div className="lists-wrapper">
          {inputValue ? (
            <SearchedUL
              filterProducts={filterProducts}
              handleProducts={handleProducts}
            />
          ) : (
            <ProductUL
              products={products}
              removeItem={removeItem}
              handleQuantity={handleQuantity}
            />
          )}
        </div>
        <div className="button-wrapper">
          {products.length > 0 && <button className="checkout-btn">Done</button>}
        </div>
      </div>
    </main>
  );
};

export default Home;
