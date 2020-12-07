// import {auth, firestore} from "./services/fire";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Home from "./pages/Home";
import "./App.scss";
import { auth } from "./services/fire";

const App = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    console.log("useEffect in App triggered!");
    auth.onAuthStateChanged(user => {
      setUser(user);
      console.log(user);
    });
  }, [])

  return (
    <div className="app">
      <Router>
        <Route exact path="/">
          <Header />
          <Landing />
          <Footer />
        </Route>

        <Route path="/signup">
          {user
          ? <Redirect to="/home" />
          : <Signup />}
        </Route>

        <Route path="/signin">
          {user
          ? <Redirect to="/home" />
          : <Signin />}
        </Route>

        <Route path="/home">
          <Header />
          {user
          ? <Home />
          : <Redirect to="/" />}
          <Footer />
        </Route>

        <Route path="/history">
          <Header />
          {/* <History /> */}
          <Footer />
        </Route>
      </Router>
    </div>
  );
};

export default App;
