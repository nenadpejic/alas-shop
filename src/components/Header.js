import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="wrapper">
        <Link to="/">
          <img src={Logo} alt="logo" className="logo" />
        </Link>
        <ul className="nav">
          <li>
            <Link to="/singin">Sing up</Link>
          </li>
          <li>
            <Link to="/singup">Sing in</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
