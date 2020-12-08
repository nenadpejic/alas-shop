import { useContext } from "react";
import {Route, Redirect} from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ProtectedRoute = ({children, access, ...rest}) => {
  const user = useContext(UserContext);

  if (access === "public") {
    return ( 
      <Route {...rest}>
        {user
        ? <Redirect to="/home"/>
        : children}
      </Route>
     );
  } else {
    return ( 
      <Route {...rest}>
        {user
        ? <>
          <Header />
          children
          <Footer />
        </>
        : <Redirect to="/"/>}
      </Route>
     );
    }
}
 
export default ProtectedRoute;