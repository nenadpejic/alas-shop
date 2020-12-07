import { useState } from "react";
import { Link } from "react-router-dom";
import './style.scss';
import logo from "../../assets/logo.png";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmail("");
    setPassword("");
  }

  return (
    <main className="signin">
      <div className="wrapper">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <h1>Sign in</h1>
        <form className="signin-form" onSubmit={handleSubmit}>
          <label htmlFor="signin-form-email">Email</label>
          <input id="signin-form-email" type="email" placeholder="Enter email.."
            onChange={(e) => setEmail(e.target.value)} value={email} />
          <label htmlFor="signin-form-password">Password</label>
          <input id="signin-form-password" type="password" placeholder="Enter password.."
            onChange={(e) => setPassword(e.target.value)} value={password} />
          <button className="submitBtn" type="submit">Sign in</button>
        </form>
        <p className="existingAcc">Need an account? <Link to="/signup">Sign up</Link></p>
      </div>
    </main>
  );
}

export default Signin;