import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="wrapper">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <div className="header-list">
          <ul>
            <li>
              <Link to="/singin">Sing up</Link>
            </li>
            <li>
              <Link to="/singup">Sing in</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
