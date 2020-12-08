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
    { food: "jaja", id: 0 },
    { food: "mleko", id: 1 },
    { food: "meso", id: 2 },
    { food: "jabuke", id: 3 },
    { food: "hleb", id: 4 },
    { food: "zejtin", id: 5 },
  ];

  const handleChange = (e) => {
    setIsActive(true);
    console.log(isActive);
    setInputValue(e.target.value);
    let newFakeData = [...fakeData];
    newFakeData = newFakeData.filter((elem) => elem.food === e.target.value);
    setsearchedListItem(newFakeData);
  };
  console.log(isActive);

  const handleProductList = (param) => {
    let products = [...productsListItem];
    products.push(param);
    setProductsListItem(products);
    setIsActive(false);
    setInputValue("");
  };

  return (
    <main className="home">
      <div className="wrapper">
        <h1>Home</h1>
        <label>Search for food</label>
        <br></br>
        <input
          type="search"
          placeholder="Enter food name..."
          onChange={handleChange}
          value={inputValue}
        />
        <div className="wrapper-lists">
          {isActive ? (
            <SearchedUL
              searchedListItem={searchedListItem}
              handleProductList={handleProductList}
            />
          ) : (
            <ProductUL productsListItem={productsListItem} />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
