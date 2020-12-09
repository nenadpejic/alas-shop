import { useState } from "react";
import { Link } from "react-router-dom";
import './style.scss';
import logo from "../../assets/logo2.png";
import { auth } from "../../services/fire";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrMsg("");
    
    auth.signInWithEmailAndPassword(email, password)
      .then(res => {
        // console.log(res);
      })
      .catch(err => {
        if (err.code === "auth/invalid-email") {
          setErrMsg("Invalid email address.")
        } else if (err.code === "auth/user-disabled") {
          setErrMsg("This account has been disabled.")
        } else if (err.code === "auth/user-not-found") {
          setErrMsg("There is no account with this email.")
        } else if (err.code === "auth/wrong-password") {
          setErrMsg("Wrong password.")
        };
      });
  }

  return (
    <main className="signin">
      <div className="wrapper">
        <Link to="/" className="logoLink">
          <img src={logo} alt="logo" className="logo" />
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
          <p className="error-msg">{errMsg}</p>
        </form>
        <p className="existingAcc">Need an account? <Link to="/signup">Sign up</Link></p>
      </div>
    </main>
  );
}

export default Signin;