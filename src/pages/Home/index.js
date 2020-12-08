import React, { useState } from "react";
import SearchedUL from "../../components/SearchedUL";
import "./style.scss";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchedListItem, setsearchedListItem] = useState([]);
  const [productsListItem, setProductsListItem] = useState([]);

  const fakeData = [
    { food: "jaja", id: 0 },
    { food: "mleko", id: 1 },
    { food: "meso", id: 2 },
    { food: "jabuke", id: 3 },
    { food: "hleb", id: 4 },
    { food: "zejtin", id: 5 },
  ];

  const handleChange = (e) => {
    setInputValue(e.target.value);
    let newFakeData = [...fakeData];
    newFakeData = newFakeData.filter((elem) => elem.food === e.target.value);
    setsearchedListItem(newFakeData);
  };

  const handleProductList = (param) => {
    let products = [...productsListItem];
    products.push(param);
    setProductsListItem(products);
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
        <SearchedUL
          searchedListItem={searchedListItem}
          handleProductList={handleProductList}
        />
        <div>
          <ul>
            {productsListItem.map((elem) => (
              <li>{elem}</li>
            ))}
          </ul>
        </div>
        {/* <ProductUL products={products}/> */}
      </div>
    </main>
  );
};

export default Home;
