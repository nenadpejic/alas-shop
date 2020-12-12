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
  }

  return (
    <ul id='menu'>
      <li><span>Account</span> <span onClick={() => { setMenu(false) }}>X</span></li>
      <hr />
      <li>
        <p>{username}</p>
        <p>{user.email}</p>
        {user.admin && <p>Admin</p>}
      </li>
      <hr />
      {user.admin && <li><Link to="/admin">Admin</Link></li>}
      <hr />
      <li onClick={handleSignOut}>Sign out</li>
    </ul>
  );
}

export default Menu;