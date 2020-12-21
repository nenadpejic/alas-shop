import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../contexts/UserContext";
import { auth } from "../../../services/fire";
import "./style.scss";

const Menu = ({ setMenu, menuRef }) => {
  const userContext = useContext(UserContext);
  const { user } = userContext;
  const { username } = userContext;

  const handleSignOut = () => {
    auth.signOut();
  };

  const handleClickInside = (e) => {
    if (e.target.tagName === "A") {
      setMenu(false);
    }
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenu(false);
      }
    }
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    }
  }, [menuRef, setMenu]);

  return (
    <ul className="drop-down-menu" onClick={handleClickInside}>
      <li className="account">
        <p>Account</p>
      </li>
      <li className="information-LI">
        <p>{username}</p>
        <p>{user.email}</p>
        {user.admin && <p>Admin</p>}
      </li>
      <li className="history-LI">
        <Link to="/history">History</Link>
      </li>
      {user.admin && (
        <>
          <li className="admin-LI">
            <Link to="/admin">Admin</Link>
          </li>
          <li className="create-product-LI">
            <Link to="/create-product">Create Product</Link>
          </li>
        </>
      )}
      <li className="sign-out" onClick={handleSignOut}>Sign out</li>
    </ul>
  );
};

export default Menu;
