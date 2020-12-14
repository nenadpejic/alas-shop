// import React, { useEffect, useState } from "react";
// import { getReceipts } from "../../services/firestore";

// const History = () => {
//   const [receipts, setReceipts] = useState([]);

//   useEffect(() => {
//     getReceipts().then((snapShot) => {
//       if (!snapShot.empty) {
//         snapShot.docs.forEach((doc) => {
//           const data = doc.data();
//           setReceipts([...receipts, data]);
//         });
//         console.log(typeof String(receipts[0].createdAt.toDate()));
//       }
//     });
//   }, []);

//   return (
//     <div>
//       <ul>
//         {receipts?.map((receipt, index) => (
//           <li key={index}>{String(receipt.createdAt.toDate())}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default History;
