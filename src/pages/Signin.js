import { useState } from "react";
import {Link} from "react-router-dom";

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
        <h1>Sign in</h1>
        <form className="signin-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="signin-form-email">Email</label>
            <input id="signin-form-email" type="email" placeholder="Enter email.."
            onChange={(e) => setEmail(e.target.value)} value={email}/>
          </div>
          <div>
            <label htmlFor="signin-form-password">Password</label>
            <input id="signin-form-password" type="password" placeholder="Enter password.."
            onChange={(e) => setPassword(e.target.value)} value={password}/>
          </div>
          <button type="submit">Sign in</button>
        </form>
        <p>Need an account? <Link to="/signup">Sign up</Link></p>
      </div>
    </main>
   );
}
 
export default Signin;