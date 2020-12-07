import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        {/* <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/singup">
          <Singup />
        </Route>
        <Route path="/singin">
          <Singin />
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
