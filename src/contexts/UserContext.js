import { useState, useEffect, createContext } from "react";
import { auth } from "../services/fire";

export const UserContext = createContext();

const UserContextProvider = ({children}) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log("useEffect in UserContextProvider triggered!");
    auth.onAuthStateChanged(user => {
      setUser(user);
      if (user) {
        console.log(`User sign in: `, user);
      } else {
        console.log(`User sign out: `, user);
      }
    });
  }, []);
  
  return ( 
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
   );
}
 
export default UserContextProvider;