import React, { useState, useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import SearchedUL from "../../components/SearchedUL";
import ProductsUL from "../../components/ProductsUL";
import {
  getProducts,
  createReceipt,
  getLatestReceipt,
} from "../../services/firestore";
import { UserContext } from "../../contexts/UserContext";
import "./style.scss";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchProducts, setSearchProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [id, setId] = useState("");
  const userContext = useContext(UserContext);
  const { suggested } = userContext;

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
    suggested.forEach((sugg) => {
      if (product.name === sugg.name) {
        product.suggQuantity = sugg.suggQuantity;
      }
    });
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
    let totalPrice = 0;
    products.forEach((product) => {
      product.total = product.quantity * product.price;
      totalPrice += product.total;
    });
    const data = {
      products: products,
      totalPrice: totalPrice,
    };
    createReceipt(data)
      .then(() => {
        console.log("Succefuly create receipt of products");
        return getLatestReceipt();
      })
      .then((snapShot) => {
        setId(snapShot.docs[0].id);
      })
      .catch((err) => "Cannot create receipt of products" + err);
  };

  return (
    <>
      {id ? (
        <Redirect to={`/history/${id}`} />
      ) : (
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
                <ProductsUL
                  products={products}
                  removeItem={removeItem}
                  handleQuantity={handleQuantity}
                />
              )}
            </div>
            <div className="button-wrapper">
              {products.length > 0 && (
                <button
                  className="checkout-btn"
                  onClick={() => handleReceipt()}
                >
                  Done
                </button>
              )}
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default Home;
