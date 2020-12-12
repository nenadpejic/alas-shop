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
    <ul className='drop-down-menu'>
      <li className="exit-drop-down"><span onClick={() => { setMenu(false) }}>X</span> <span>Account</span></li>
      <li>
        {username}
      </li>
      <li>
        {user.email}
      </li>
      {user.admin && <li><Link to="/admin">Admin</Link></li>}
      <li onClick={handleSignOut}>Sign out</li>
    </ul>
  );
}

export default Menu;