import { Redirect, Route } from 'react-router-dom';
import { ReactComponent as Loader } from "../assets/loader.svg";
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AdminRoute = ({ children, ...rest }) => {
  const userContext = useContext(UserContext);
  const { user } = userContext;
  const { isLoading } = userContext;

  return (
    <Route {...rest}>
      { isLoading
        ? <Loader className="loader" />
        : user?.admin
          ? <>
            < Header />
            {children}
            < Footer />
          </>
          : <Redirect to="/home" />}
    </Route>
  );
}

export default AdminRoute;