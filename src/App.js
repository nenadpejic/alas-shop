import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Home from "./pages/Home";
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
          <Header />
          <Home />
          <Footer />
        </ProtectedRoute>

        <ProtectedRoute path="/history" access="private">
          <Header />
          {/* <History /> */}
          <Footer />
        </ProtectedRoute>
      </Router>
    </UserContextProvider>
  );
};

export default App;
