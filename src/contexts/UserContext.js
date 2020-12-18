import { useState, useEffect, createContext } from "react";
import { auth, firestore } from "../services/fire";
import { getReceiptsOS, updateSuggested, getSuggested, getLatestReceipt } from "../services/firestore";
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

        // checking if lastReceiptCreatedAt < suggestedCreatedAt
        let lastReceiptCreatedAt;
        getLatestReceipt()
          .then(snapshot => {
            if (snapshot.empty) {
              console.log("Snapshot is empty!");
            } else {
              lastReceiptCreatedAt = snapshot.docs[0].data().createdAt;
              return getSuggested();
            }
          })
          .then(snapshot => {
            if (!snapshot.exists) {
              console.log("Document dosen't exist!");
            } else {
              const suggestedCreatedAt = snapshot.data().suggestedCreatedAt;
              if (lastReceiptCreatedAt < suggestedCreatedAt) {
                const sugg1 = snapshot.data().suggested;
                setSuggested(sugg1);
              } else {
                // handling suggested
                getReceiptsOS(snapshot => {
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
                    // console.log(JSON.parse(JSON.stringify(concatProducts)));
                    // create suggested
                    const sugg = createSuggested(concatProducts);
                    // console.log(sugg);
                    setSuggested(sugg);
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
              }
            }
          })

      } else {
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