import React, { useState } from "react";
import SearchedList from "../../components/SearchedList";
import "./style.scss";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchedItem, setSearchedItem] = useState([]);
  const [products, setProducts] = useState([]);

  const data = [
    { food: "jaja", id: 0 },
    { food: "mleko", id: 1 },
    { food: "meso", id: 2 },
    { food: "jabuke", id: 3 },
    { food: "hleb", id: 4 },
    { food: "zejtin", id: 5 },
  ];

  const handleChange = (e) => {
    setInputValue(e.target.value);
    let newData = [...data];
    newData = newData.filter((elem) => elem.food === e.target.value);
    setSearchedItem(newData);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setInputValue("");
  // };

  const createProductList = (param) => {
    let arrOfProducts = [...products];
    arrOfProducts.push(param);
    setProducts(arrOfProducts);
  };

  return (
    <main className="home">
      <div className="wrapper">
        <h1 className="homeTitle">Home</h1>
        <form className="wrapper-form">
          <label>Search for food</label>
          <br></br>
          <input
            type="search"
            placeholder="Enter food name..."
            onChange={handleChange}
            value={inputValue}
          />
        </form>
        <SearchedList
          searchedItem={searchedItem}
          createProductList={createProductList}
          />
        <div>
          <ul>
            {products.map((elem) => (
              <li>{elem}</li>
              ))}
          </ul>
        </div>
        {/* <ProductList products={products}/> */}
      </div>
    </main>
  );
};

export default Home;
