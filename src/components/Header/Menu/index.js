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
    // <ul className='drop-down-menu'>
    //   <li className="exit-drop-down"><span onClick={() => { setMenu(false) }}>X</span> <span>Account</span></li>
    //   <li>
    //     <p>{username}</p>
    //     <p>{user.email}</p>
    //     {user.admin && <li className="admin-list-item"><Link className="admin" to="/admin">Admin</Link></li>}
    //   </li>
    //   <li onClick={handleSignOut}>Sign out</li>
    // </ul>
    <ul className="drop-down-menu">
    <li className="exit-LI"><span onClick={() => { setMenu(false) }}>X</span><span>Account</span></li>
    <li className="information-LI">
      <p>{username}</p>
      <p>{user.email}</p>
      {user.admin && <p>Admin</p>}
    </li>
    {user.admin && <li className="admin-LI"><Link className="admin" to="/admin">Admin</Link></li>}
    <li onClick={handleSignOut}>Sign out</li>
  </ul>
  );
}

export default Menu;