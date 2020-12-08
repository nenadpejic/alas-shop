import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
<<<<<<< HEAD
import './style.scss';
import {auth} from "../../services/fire";
import {UserContext} from "../../contexts/UserContext";

const Header = () => {
  const user = useContext(UserContext);

=======
import "./style.scss";
import { auth } from "../../services/fire";

const Header = () => {
>>>>>>> 49c01cb3db465b0d8809b4fffdb83aaf764034c2
  const handleSignout = () => {
    auth.signOut();
  };

  return (
    <header className="header">
      <div className="wrapper">
<<<<<<< HEAD
        {user
        ? <>
          <Link to="/home">
            <img src={Logo} alt="logo" className="logo" />
          </Link>
          <nav>
            <ul>
              <li>{user.email}</li>
              <li><button onClick={handleSignout}>Sign out</button></li>
            </ul>
          </nav>
        </>
        : <>
          <Link to="/">
            <img src={Logo} alt="logo" className="logo" />
          </Link>
          <nav>
            <ul>
              <li>
                <Link to="/signup">Sign up</Link>
              </li>
              <li>
                <Link to="/signin">Sign in</Link>
              </li>
            </ul>
          </nav>
        </>}
=======
        <Link to="/" className="logoLink">
          <img src={Logo} alt="logo" className="logo" />
        </Link>
        <ul className="nav">
          <li>
            <Link to="/signup">Sign up</Link>
          </li>
          <li>
            <Link to="/signin">Sign in</Link>
          </li>
          <li>
            <button onClick={handleSignout}>Sign out</button>
          </li>
        </ul>
>>>>>>> 49c01cb3db465b0d8809b4fffdb83aaf764034c2
      </div>
    </header>
  );
};

export default Header;
