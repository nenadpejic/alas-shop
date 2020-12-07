import { useState } from "react";
import {Link} from "react-router-dom";
import './style.scss';

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmail("");
    setPassword("");
    setConfirmPassword("");
  }
  
  return ( 
    <main className="signup">
      <div className="wrapper">
        <h1>Sign up</h1>
        <form className="signup-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="signup-form-email">Email</label>
            <input id="signup-form-email" type="email" placeholder="Enter email.."
            onChange={(e) => setEmail(e.target.value)} value={email}/>
          </div>
          <div>
            <label htmlFor="signup-form-password">Password</label>
            <input id="signup-form-password" type="password" placeholder="Enter password.."
            onChange={(e) => setPassword(e.target.value)} value={password}/>
          </div>
          <div>
            <label htmlFor="signup-form-confirm-password">Confirm Password</label>
            <input id="signup-form-confirm-password" type="password" placeholder="Confirm password.."
            onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}/>
          </div>
          <button type="submit">Sign up</button>
        </form>
        <p>Already have an account? <Link to="/signin">Sign in</Link></p>
      </div>
    </main>
   );
}
 
export default Signup;