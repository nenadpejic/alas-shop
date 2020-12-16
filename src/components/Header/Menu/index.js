import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../contexts/UserContext";
import { auth } from "../../../services/fire";
import "./style.scss";

const Menu = ({ setMenu }) => {
  const userContext = useContext(UserContext);
  const { user } = userContext;
  const { username } = userContext;

  const handleSignOut = () => {
    auth.signOut();
  };

  return (
    <ul className="drop-down-menu">
      <li className="exit-LI">
        <span
          onClick={() => {
            setMenu(false);
          }}
        >
          X
        </span>
        <span>Account</span>
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
        <li className="admin-LI">
          <Link to="/admin">
            Admin
          </Link>
        </li>
      )}
      {user.admin && (
        <li className="create-product-LI">
          <Link to="/create-product">
            Create Product
          </Link>
        </li>
      )}
      <li onClick={handleSignOut}>Sign out</li>
    </ul>
  );
};

export default Menu;
