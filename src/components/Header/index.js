import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import "./style.scss";
import { UserContext } from "../../contexts/UserContext";
import Menu from "./Menu";

const Header = () => {
  const userContext = useContext(UserContext);
  const { user } = userContext;
  const { username } = userContext;
  const [menu, setMenu] = useState(false);
  const menuRef = useRef();

  return (
    <header className="header">
      <div className="wrapper">
        {user ? (
          <>
            <Link to="/home" className="logoLink">
              <img src={Logo} alt="logo" className="logo" />
            </Link>
            <nav className="nav">
              <ul className="nav-list">
                <li className="user-email" ref={menuRef}>
                  <span onClick={() => setMenu(!menu)}>{username}</span>
                  {menu && <Menu setMenu={setMenu} menuRef={menuRef} />}
                </li>
              </ul>
            </nav>
          </>
        ) : (
            <>
              <Link to="/" className="logoLink">
                <img src={Logo} alt="logo" className="logo" />
              </Link>
              <nav className="nav">
                <ul className="nav-list">
                  <li className="ss-btn">
                    <Link to="/signup">Sign up</Link>
                  </li>
                  <li className="ss-btn">
                    <Link to="/signin">Sign in</Link>
                  </li>
                </ul>
              </nav>
            </>
          )}
      </div>
    </header>
  );
};

export default Header;
