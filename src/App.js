import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Home from "./pages/Home";
// import Admin from "./pages/Admin";
import "./App.scss";
import UserContextProvider from "./contexts/UserContext";
import ProtectedRoute from "./routes/ProtectedRoute";

const App = () => {
  return (
    <UserContextProvider>
      <Router>
        <ProtectedRoute exact path="/" access="public">
          <Header />
          <Landing />
          <Footer />
        </ProtectedRoute>

        <ProtectedRoute path="/signup" access="public">
          <Signup />
        </ProtectedRoute>

        <ProtectedRoute path="/signin" access="public">
          <Signin />
        </ProtectedRoute>

        <ProtectedRoute path="/home" access="private">
          <Home />
        </ProtectedRoute>

        <ProtectedRoute path="/history" access="private">
          {/* <History /> */}
        </ProtectedRoute>

        {/* <ProtectedRoute path="/admin" access="private">
          <Admin />
        </ProtectedRoute> */}
      </Router>
    </UserContextProvider>
  );
};

export default App;
