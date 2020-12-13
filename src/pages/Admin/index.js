import { useState } from "react";
import { functions } from "../../services/fire";
import "./style.scss";

const Admin = () => {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const addAdminRole = functions.httpsCallable('addAdminRole');

  const handleSubmit = (e) => {
    e.preventDefault();

    addAdminRole({ email: email })
      .then(result => {
        // console.log(result);
        setMsg(result.data.message);
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <main id="admin">
      <div className="wrapper">
        <h1>Admin</h1>
        <form className="admin-form" onSubmit={handleSubmit}>
          <label htmlFor="admin-form-email">Email</label>
          <input type="email" name="email" id="admin-form-email" placeholder="Enter email.." required
            onChange={(e) => setEmail(e.target.value)} value={email} />
          <button type="submit">Make admin</button>
          {msg && <p className='msg'>{msg}</p>}
        </form>
      </div>
    </main>
  );
}

export default Admin;