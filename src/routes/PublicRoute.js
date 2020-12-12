import { Route, Redirect } from 'react-router-dom';
import { ReactComponent as Loader } from "../assets/loader.svg";
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

const PublicRoute = ({ children, ...rest }) => {
  const userContext = useContext(UserContext);
  const { user } = userContext;
  const { isLoading } = userContext;

  return (
    <Route {...rest}>
      {isLoading
        ? <Loader className='loader' />
        : user
          ? <Redirect to="/home" />
          : children}
    </Route>
  );
}

export default PublicRoute;