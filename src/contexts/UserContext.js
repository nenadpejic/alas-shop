import { useState, useEffect, createContext } from "react";
import { auth, firestore } from "../services/fire";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [username, setUsername] = useState("");

  const userContext = {
    user: user,
    isLoading: isLoading,
    username: username
  }

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setUser(user);
      setIsLoading(false);
      if (user) {
        // get custom claims and attach it to user
        // user.getIdTokenResult()
        //   .then(idTokenResult => {
        //     user.admin = idTokenResult.claims.admin;
        //   })

        console.log(`User sign in: `, user.email);
        firestore.collection("users").doc(user.uid).get()
          .then(doc => {
            const data = doc.data();
            setUsername(data.username);
          })
          .catch(err => {
            console.log(err);
          })
      } else {
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