import { Route, Redirect } from "react-router-dom";
import { ReactComponent as Loader } from "../assets/loader.svg";
import { useContext } from "react";
import { UserContext } from '../contexts/UserContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivateRoute = ({ children, ...rest }) => {
  const userContext = useContext(UserContext);
  const { user } = userContext;
  const { isLoading } = userContext;

  return (
    <Route {...rest}>
      { isLoading
        ? <Loader className='loader' />
        : user
          ? <>
            < Header id='test' />
            { children}
            < Footer />
          </>
          : <Redirect to="/" />}
    </Route>
  );
}

export default PrivateRoute;