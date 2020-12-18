import { useState, useEffect, createContext } from "react";
import { auth, firestore } from "../services/fire";
import { getReceiptsOS, updateSuggested } from "../services/firestore";
import { createSuggested } from "../utilities";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [username, setUsername] = useState("");
  const [suggested, setSuggested] = useState([]);

  const userContext = {
    user: user,
    isLoading: isLoading,
    username: username,
    suggested: suggested
  }

  useEffect(() => {
    let unsubscribe;
    auth.onAuthStateChanged(user => {
      setUser(user);
      if (user) {
        // handling custom claims and attach it to user
        user.getIdTokenResult()
          .then(idTokenResult => {
            user.admin = idTokenResult.claims.admin;
            // handling username
            return firestore.collection("users").doc(user.uid).get()
          })
          .then(doc => {
            const data = doc.data();
            setUsername(data.username);
            setIsLoading(false);
            console.log(`User sign in: `, user.email);
          })
          .catch(err => {
            console.log(err);
          });

        // handling suggested
        // setSuggested on app refresh and new receipt added
        unsubscribe = getReceiptsOS(snapshot => {
          if (snapshot.empty) {
            console.log("Snapshot is empty!");
          } else {
            const docs = snapshot.docs;
            // concatenate products
            let concatProducts = [];
            docs.forEach(doc => {
              if (!doc.exists) {
                console.log("Document dosen't exist!");
              } else {
                const products = doc.data().products;
                concatProducts = concatProducts.concat(products);
              }
            })
            // create suggested with func from util
            const sugg = createSuggested(concatProducts);
            setSuggested(sugg);
            // optional ask if lastReceiptCreatedAt > suggestedCreatedAt
            updateSuggested(sugg)
              .then(() => {
                console.log("Suggested updated!");
              })
              .catch(err => {
                console.log(err)
              })
          }
        }, err => {
          console.log(err)
        });
      } else {
        unsubscribe && unsubscribe();
        setIsLoading(false);
        console.log(`User sign out: `, user);
      }
    })
  }, []);

  return (
    <UserContext.Provider value={userContext}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;