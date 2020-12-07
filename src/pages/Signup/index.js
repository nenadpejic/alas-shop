import { useState } from "react";
import { Link } from "react-router-dom";
import './style.scss';
import logo from "../../assets/logo.png";
import { auth } from "../../services/fire";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })

    setEmail("");
    setPassword("");
    setConfirmPassword("");
  }

  return (
    <main className="signup">
      <div className="wrapper">
        <Link to="/" className="logoLink">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <h1>Sign up</h1>
        <form className="signup-form" onSubmit={handleSubmit}>
          <label htmlFor="signup-form-email">Email</label>
          <input id="signup-form-email" type="email" placeholder="Enter email.."
            onChange={(e) => setEmail(e.target.value)} value={email} />
          <label htmlFor="signup-form-password">Password</label>
          <input id="signup-form-password" type="password" placeholder="Enter password.."
            onChange={(e) => setPassword(e.target.value)} value={password} />
          <label htmlFor="signup-form-confirm-password">Confirm Password</label>
          <input id="signup-form-confirm-password" type="password" placeholder="Confirm password.."
            onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />
          <button className="submitBtn" type="submit">Sign up</button>
        </form>
        <p className="existingAcc">Already have an account?<Link to="/signin">Sign in</Link></p>
      </div>
    </main >
  );
}

export default Signup;