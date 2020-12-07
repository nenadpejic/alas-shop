// import {auth, firestore} from "./services/fire";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Route exact path="/">
          <Header/>
          <Footer/>
          <Landing />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/home">
          <Header/>
          {/* <Home /> */}
          <Footer/>
        </Route>
        <Route path="/history">
          <Header/>
          {/* <History /> */}
          <Footer/>
        </Route>
      </Router>
    </div>
  );
};

export default App;
