// import {auth, firestore} from "./services/fire";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <Route path="/home">
          <Home />
        </Route>
        {/* <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/history">
          <History />
        </Route> */}
        <Footer />
      </Router>
    </div>
  );
};

export default App;
