import { useContext } from "react";
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
      <li><span>Account</span> <span onClick={() => { setMenu(false); console.log('test') }}>X</span></li>
      <hr />
      <li>
        <p>{username}</p>
        <p>{user.email}</p>
        <p>{user.admin && 'Admin'}</p>
      </li>
      <hr />
      <li onClick={handleSignOut}>Sign out</li>
    </ul>
  );
}

export default Menu;