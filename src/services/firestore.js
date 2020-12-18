import { firestore, auth } from "./fire";

// Receipts
export const createReceipt = (data) => {
  // data = {
  //   products: [{name: "Jabuka", quantity: 3, price: 10, total: 30}],
  //   totalPrice: 1150,
  // }
  return firestore.collection("receipts").doc().set({
    createdAt: new Date(),
    createdBy: auth.currentUser.uid,
    products: data.products,
    totalPrice: data.totalPrice
  });
};

export const getReceipts = () => {
  return firestore
    .collection("receipts")
    .where("createdBy", "==", auth.currentUser.uid)
    .orderBy("createdAt", "desc")
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

// Users
export const updateSuggested = (data) => {
  // data = [{name: "Jabuka", quantity: 3}]
  return firestore.collection("users").doc(auth.currentUser.uid).update({
    suggested: data,
    createdAt: new Date()
  });
};

export const getSuggested = () => {
  return firestore.collection("users").doc(auth.currentUser.uid).get();
};
