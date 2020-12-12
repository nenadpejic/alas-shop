import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo2.png";
import './style.scss';
import { UserContext } from "../../contexts/UserContext";
import Menu from "./Menu";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const userContext = useContext(UserContext);
  const { user } = userContext;
  const { username } = userContext;

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
                <li className="user-email">
                  <span onClick={() => setMenu(!menu)}>{username}</span>
                  {menu && <Menu setMenu={setMenu} />}
                </li>
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
