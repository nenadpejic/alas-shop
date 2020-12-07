import React, { useState } from "react";

const Home = () => {
  const [test, setTest] = useState([]);

  const data = [
    { food: "jaja", id: 0 },
    { food: "mleko", id: 1 },
    { food: "meso", id: 2 },
    { food: "jabuke", id: 3 },
    { food: "hleb", id: 4 },
    { food: "zejtin", id: 5 },
  ];

  //   let newData = [...data];
  //   newData.map((elem) => {
  //     console.log(elem.food);
  //   });

  const handleChange = (e) => {
    console.log(e.target.value);
    let newData = [...data];
    // newData.forEach((elem, index) => {
    //   if (elem.food === e.target.value) {
    //     console.log(elem);
    //   }
    // });
    newData = newData.filter((elem) => elem.food === e.target.value);
    // newData.map((elem) => console.log(elem));
    setTest([...newData]);
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
        />
      </div>
      {console.log(test)}
      <ul>
        {test.map((elem) => (
          <li>{elem.food}</li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
