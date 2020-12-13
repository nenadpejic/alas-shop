import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserContextProvider from "./contexts/UserContext";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import AdminRoute from "./routes/AdminRoute";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import PageNotFound from './pages/PageNotFound';

const App = () => {
  return (
    <UserContextProvider>
      <Router>
        <Switch>
          <PublicRoute exact path="/">
            <Header />
            <Landing />
            <Footer />
          </PublicRoute>

          <PublicRoute exact path="/signup">
            <Signup />
          </PublicRoute>

          <PublicRoute exact path="/signin">
            <Signin />
          </PublicRoute>

          <PrivateRoute exact path="/home">
            <Home />
          </PrivateRoute>

          <PrivateRoute exact path="/history">
            {/* <History /> */}
          </PrivateRoute>

          <AdminRoute exact path="/admin">
            <Admin />
          </AdminRoute>

          <Route path='*'>
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
    </UserContextProvider>
  );
};

export default App;
