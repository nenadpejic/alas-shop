import React, { useState } from "react";
import SearchedUL from "../../components/SearchedUL";
import ProductUL from "../../components/ProductUL";
import "./style.scss";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchedListItem, setsearchedListItem] = useState([]);
  const [productsListItem, setProductsListItem] = useState([]);
  const [isActive, setIsActive] = useState(false);

  //Fake Data
  const fakeData = [
    { name: "Jaja", quantity: 0 },
    { name: "Mleko", quantity: 0 },
    { name: "Meso", quantity: 0 },
    { name: "Jabuke", quantity: 0 },
    { name: "Hleb", quantity: 0 },
    { name: "Zejtin", quantity: 0 },
  ];

  const handleChange = (e) => {
    setInputValue(e.target.value);
    setIsActive(true);
    let newFakeData = [...fakeData];
    newFakeData = newFakeData.filter((elem) =>
      elem.name.toLowerCase().includes(e.target.value)
    );
    setsearchedListItem(newFakeData);
  };

  //add item from searched list to products list
  const handleProductList = (product) => {
    let products = [...productsListItem];
    products.unshift(product);
    setProductsListItem(products);
    setIsActive(false);
    setInputValue("");
  };

  //removing item from products List
  const removeItem = (i) => {
    let products = [...productsListItem];
    products.forEach((elem, index) => {
      if (index === i) {
        products.splice(index, 1);
      }
    });
    setProductsListItem(products);
  };

  return (
    <main className="home">
      <div className="wrapper">
        <h1 className="home-title">Home</h1>

        <div className="search-wrapper">
          <label>Search for food</label>
          <input
            type="text"
            placeholder="Enter food name..."
            onChange={handleChange}
            value={inputValue}
          />
        </div>
        <div className="damjan">
          {isActive ? (
            <SearchedUL
              searchedListItem={searchedListItem}
              handleProductList={handleProductList}
            />
          ) : (
            <ProductUL
              productsListItem={productsListItem}
              removeItem={removeItem}
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
