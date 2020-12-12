import { Redirect, Route } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ReactComponent as Loader } from "../assets/loader.svg";

const AdminRoute = ({ children, ...rest }) => {
  const userContext = useContext(UserContext);
  const { user } = userContext;
  const { isLoading } = userContext;

  return (
    <Route {...rest} render={() => {
      return (
        isLoading
          ? <Loader className="loader" />
          : user?.admin
            ? <>
              < Header />
              {children}
              < Footer />
            </>
            : <Redirect to="/home" />
      )
    }
    } />
  );
}

export default AdminRoute;