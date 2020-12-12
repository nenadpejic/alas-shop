// import React from "react";
// import { createProduct } from "../../services/firestore";
// import "./style.css";

// const CreateProduct = () => {
//   const data1 = {
//     name: "Mleko",
//     price: 99,
//   };
//   const data2 = {
//     name: "Hleb",
//     price: 50,
//   };
//   const data3 = {
//     name: "Jaja",
//     price: 10,
//   };
//   const data4 = {
//     name: "Zejtin",
//     price: 120,
//   };
//   const data5 = {
//     name: "Jogurt",
//     price: 85,
//   };

//   const handleClick = () => {
//     createProduct(data5)
//       .then(() => console.log("Succefuly added"))
//       .catch((err) => console.log("Cannot add document", err));
//   };

//   return (
//     <div className="create-product">
//       <button onClick={() => handleClick()}>Add Product</button>
//     </div>
//   );
// };

// export default CreateProduct;
