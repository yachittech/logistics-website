import React from "react";

const SignIn = () => (
  <main className="auth">
    <h2>Sign In</h2>
    <form>
      <div className="form-group">
        <label>Email:</label>
        <input type="email" required />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input type="password" required />
      </div>
      <button type="submit">Sign In</button>
    </form>
  </main>
);

export default SignIn;
