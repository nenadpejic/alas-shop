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
    { food: "Jaja", id: 0 },
    { food: "Mleko", id: 1 },
    { food: "Meso", id: 2 },
    { food: "Jabuke", id: 3 },
    { food: "Hleb", id: 4 },
    { food: "Zejtin", id: 5 },
  ];

  const handleChange = (e) => {
    setIsActive(true);
    setInputValue(e.target.value);
    let newFakeData = [...fakeData];
    newFakeData = newFakeData.filter((elem) =>
      elem.food.toLowerCase().includes(e.target.value)
    );
    setsearchedListItem(newFakeData);
  };

  //add item from searched list to products list
  const handleProductList = (param) => {
    let products = [...productsListItem];
    products.unshift(param);
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
            type="search"
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
<<<<<<< HEAD
              <ProductUL productsListItem={productsListItem} />
=======
              <ProductUL
                productsListItem={productsListItem}
                removeItem={removeItem}
              />
>>>>>>> fefae6860b9301bef7c83afb93bcdf3a62024752
            )}
        </div>
      </div>
    </main>
  );
};

export default Home;
