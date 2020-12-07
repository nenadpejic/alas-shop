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
<<<<<<< HEAD
        {/* <div className="header-list"> */}
        <ul className="nav">
          <li>
            <Link to="/singin">Sing up</Link>
          </li>
          <li>
            <Link to="/singup">Sing in</Link>
          </li>
        </ul>
        {/* </div> */}
=======
        <div className="header-list">
          <ul>
            <li>
              <Link to="/signup">Sign up</Link>
            </li>
            <li>
              <Link to="/signin">Sign in</Link>
            </li>
          </ul>
        </div>
>>>>>>> 223ae6e7c0731cd2e2186cfe0ad696fc4a292a57
      </div>
    </header>
  );
};

export default Header;
