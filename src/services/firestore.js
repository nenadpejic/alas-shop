import { firestore, auth } from "./fire";

// Receipts
export const createReceipt = (data) => {
  // data = [{
  //   name: "Jabuka",
  //   quantity: 3
  // }]
  return firestore.collection("receipts").doc().set({
    createdAt: new Date(),
    createdBy: auth.currentUser.uid,
    products: data,
  });
};

export const getReceipts = () => {
  return firestore
    .collection("receipts")
    .where("createdBy", "==", auth.currentUser.uid)
    .get();
};

export const getLatestReceipt = () => {
  return firestore
    .collection("receipts")
    .orderBy("createdAt", "desc")
    .limit(1)
    .get();
};

// Products
export const createProduct = (data) => {
  // data = {
  //   name: "Jabuka",
  //   price: 30
  // }
  return firestore.collection("products").doc().set(data);
};

export const getProducts = () => {
  return firestore.collection("products").get();
};
