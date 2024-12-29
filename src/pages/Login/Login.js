// import React, { useState } from "react";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Add your login logic here
//     alert(`Logged in as ${email}`);
//   };

//   return (
//     <main className="login">
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <div className="form-group">
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </main>
//   );
// };

// export default Login;


// SignInSignUpCard.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { FaUserTie, FaUserAlt } from "react-icons/fa"; // Import profile icons
import "./Login.css";

const Login = ({ onLogin }) => {
    const [isSignIn, setIsSignIn] = useState(true); // Toggle between Sign In and Sign Up
    const [userType, setUserType] = useState("client"); // Default user type
//   const [login, setlogin] = useState(true);
  const { login } = useAuth();  // Access the login function from context
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsSignIn(!isSignIn); // Toggle between Sign In and Sign Up forms
  };

  const handleUserTypeChange = (type) => {
    setUserType(type); // Update user type
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    login(); // Trigger login callback
    navigate("/"); // Redirect to the homepage
    console.log("From Login.js handleFormSubmit: "+login);
  };

  const handleLogin = () => {
    // setlogin(true); // Update the login state
    login();
    console.log("From Login.js handleLogin: "+login);
  };

  return (
    <div className="signin-signup-card">
      {/* Left Section: Logo */}
      <div className="card-left">
        <img src="/path-to-your-logo/logo.png" alt="Company Logo" className="company-logo" />
      </div>

      {/* User Type Selector */}
        {/* <div className="user-type-selector">
          <button
            className={`user-type-button ${
              userType === "client" ? "active" : ""
            }`}
            onClick={() => handleUserTypeChange("client")}
          >
            <FaUserAlt size={24} className="icon" /> Client
          </button>
          <button
            className={`user-type-button ${
              userType === "vendor" ? "active" : ""
            }`}
            onClick={() => handleUserTypeChange("vendor")}
          >
            <FaUserTie size={24} className="icon" /> Vendor
          </button>
        </div> */}

      {/* Right Section: Form */}
      <div className="card-right">
        <h2>{isSignIn ? "Sign In" : "Sign Up"}</h2>
        <form>
          {!isSignIn && (
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Enter your name" required={!isSignIn}/>
            </div>
          )}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" />
          </div>
          <button type="submit" className="form-button" onClick={handleFormSubmit}>
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
        </form>
        <p className="toggle-text">
          {isSignIn ? "Don't have an account?" : "Already have an account?"}{" "}
          {/* <span onClick={() => setlogin(!login)} className="toggle-link"> */}
          <span onClick={handleLogin} className="toggle-link">
            {isSignIn ? "Sign Up" : "Sign In"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
