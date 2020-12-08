import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo2.png";
import './style.scss';
import { auth } from "../../services/fire";
import { UserContext } from "../../contexts/UserContext";

const Header = () => {
  const user = useContext(UserContext);

  const handleSignout = () => {
    auth.signOut();
  };

  return (
    <header className="header">
      <div className="wrapper">
        {user
          ? <>
            <Link to="/home" className="logoLink">
              <img src={Logo} alt="logo" className="logo" />
            </Link>
            <nav className="nav">
              <ul className="nav-list">
                <li className="user-email">{user.email}</li>
                <li><button className="signout" onClick={handleSignout}>Sign out</button></li>
              </ul>
            </nav>
          </>
          : <>
            <Link to="/" className="logoLink">
              <img src={Logo} alt="logo" className="logo" />
            </Link>
            <nav className="nav">
              <ul className="nav-list">
                <li>
                  <Link to="/signup">Sign up</Link>
                </li>
                <li>
                  <Link to="/signin">Sign in</Link>
                </li>
              </ul>
            </nav>
          </>}
      </div>
    </header>
  );
};

export default Header;
