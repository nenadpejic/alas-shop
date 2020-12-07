import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import './style.scss';
import {auth} from "../../services/fire";

const Header = () => {
  
  const handleSignout = () => {
    auth.signOut();
  };

  return (
    <header className="header">
      <div className="wrapper">
        <Link to="/">
          <img src={Logo} alt="logo" className="logo" />
        </Link>
        <ul className="nav">
          <li>
            <Link to="/signup">Sing up</Link>
          </li>
          <li>
            <Link to="/signin">Sing in</Link>
          </li>
          <li>
            <button onClick={handleSignout}>Sign out</button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
