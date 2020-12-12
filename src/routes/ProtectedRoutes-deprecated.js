import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ReactComponent as Loader } from "../assets/loader.svg";

const ProtectedRoute = ({ children, access, ...rest }) => {
  const userContext = useContext(UserContext);
  const { user } = userContext;
  const { isLoading } = userContext;

  return (
    <Route {...rest}>
      { isLoading
        ? <Loader className="loader" />
        : access === "public"
          ? user
            ? <Redirect to="/home" />
            : children
          : user
            ? <>
              < Header />
              { children}
              < Footer />
            </>
            : <Redirect to="/" />}
    </Route >
  );
}

export default ProtectedRoute;