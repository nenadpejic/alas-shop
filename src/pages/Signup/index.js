import { useState } from "react";
import { Link } from "react-router-dom";
import './style.scss';
import logo from "../../assets/img/logo.png";
import { auth, firestore } from "../../services/fire";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrMsg("");
    let userUID = "";

    if (password !== confirmPassword) {
      setErrMsg("Passwords do not match.");
    } else if (/\s/.test(email)) {
      setErrMsg("Email contains whitespaces");
    } else if (username.startsWith(" ") || username.endsWith(" ")) {
      setErrMsg("Username can not start or end with a whitespace.");
    } else if (/\s/.test(password)) {
      setErrMsg("Password contains whitespaces");
    } else {
      auth.createUserWithEmailAndPassword(email, password)
        .then(cred => {
          // const user = cred.user;
          userUID = cred.user.uid;
          console.log(`Signup user with email: ${email}`);
          const data = {
            username: username
          }
          return firestore.collection("users").doc(userUID).set(data)
        })
        .then(() => {
          console.log(`Created user: ${userUID}, with username: ${username}`);
        })
        .catch(err => {
          if (err.code === "auth/email-already-in-use") {
            setErrMsg("There already exists an account with that email.")
          } else if (err.code === "auth/invalid-email") {
            setErrMsg("Invalid email address.")
          } else if (err.code === "auth/operation-not-allowed") {
            setErrMsg("Email/password accounts are not enabled.")
          } else if (err.code === "auth/weak-password") {
            setErrMsg("Password must be at least 6 characters long.")
          };
        });
    };
  }

  return (
    <main className="signup">
      <div className="wrapper">
        <Link to="/" className="logoLink">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <h1>Sign up</h1>
        <form className="signup-form" onSubmit={handleSubmit}>
          <label htmlFor="signup-form-username">Username</label>
          <input id="signup-form-username" type="text" placeholder="Enter username.." required
            onChange={(e) => setUsername(e.target.value)} value={username} />
          <label htmlFor="signup-form-email">Email</label>
          <input id="signup-form-email" type="email" placeholder="Enter email.." required
            onChange={(e) => setEmail(e.target.value)} value={email} />
          <label htmlFor="signup-form-password">Password</label>
          <input id="signup-form-password" type="password" placeholder="Enter password.." required
            onChange={(e) => setPassword(e.target.value)} value={password} />
          <label htmlFor="signup-form-confirm-password">Confirm Password</label>
          <input id="signup-form-confirm-password" type="password" placeholder="Confirm password.." required
            onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />
          <button className="submitBtn" type="submit">Sign up</button>
          <p className="error-msg">{errMsg}</p>
        </form>
        <p className="existingAcc">Already have an account?<Link to="/signin">Sign in</Link></p>
      </div>
    </main >
  );
}

export default Signup;