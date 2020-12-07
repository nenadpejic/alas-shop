import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">
        <Link to="/">Logo</Link>
      </div>
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
  );
};

export default Header;
