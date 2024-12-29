import React from "react";

const SignUp = () => (
  <main className="auth">
    <h2>Sign Up</h2>
    <form>
      <div className="form-group">
        <label>Email:</label>
        <input type="email" required />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input type="password" required />
      </div>
      <div className="form-group">
        <label>Confirm Password:</label>
        <input type="password" required />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  </main>
);

export default SignUp;
