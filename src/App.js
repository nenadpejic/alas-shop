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
<<<<<<< HEAD
=======
  const [user, setUser] = useState();

  useEffect(() => {
    console.log("useEffect in App triggered!");
    auth.onAuthStateChanged((user) => {
      setUser(user);
      console.log(user);
    });
  }, []);

>>>>>>> 49c01cb3db465b0d8809b4fffdb83aaf764034c2
  return (
    <UserContextProvider>
      <Router>
        <ProtectedRoute exact path="/" access="public">
          <Header />
          <Landing />
          <Footer />
        </ProtectedRoute>

<<<<<<< HEAD
        <ProtectedRoute path="/signup" access="public">
          <Signup />
        </ProtectedRoute>

        <ProtectedRoute path="/signin" access="public">
          <Signin />
        </ProtectedRoute>
=======
        <Route path="/signup">
          {user ? <Redirect to="/home" /> : <Signup />}
        </Route>

        <Route path="/signin">
          {user ? <Redirect to="/home" /> : <Signin />}
        </Route>
>>>>>>> 49c01cb3db465b0d8809b4fffdb83aaf764034c2

        <ProtectedRoute path="/home" access="private">
          <Header />
<<<<<<< HEAD
          <Home />
=======
          {user ? <Home /> : <Redirect to="/" />}
>>>>>>> 49c01cb3db465b0d8809b4fffdb83aaf764034c2
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
