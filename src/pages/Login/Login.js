// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";
// import { FaUserTie, FaUserAlt } from "react-icons/fa"; // Import profile icons
// import Logo from "../../assests/YaChit_Logo_Default.png";
// import "./Login.css";

// const Login = ({ onLogin }) => {
//   const [isSignIn, setIsSignIn] = useState(true); // Toggle between Sign In and Sign Up
//   const [userType, setUserType] = useState("client"); // Default user type
//   const [selectedRole, setSelectedRole] = useState("Client"); // Dropdown state
//   const [formData, setFormData] = useState({
//     email: "",
//     firstName: "",
//     lastName: "",
//     password: "",
//   });
//   const [errors, setErrors] = useState({});
//   const { login } = useAuth(); // Access the login function from context
//   const navigate = useNavigate();

//   const toggleForm = () => {
//     setIsSignIn(!isSignIn); // Toggle between Sign In and Sign Up forms
//   };

//   const handleRoleChange = (e) => {
//     setSelectedRole(e.target.value); // Update the selected role
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const validateForm = () => {
//     let validationErrors = {};

//     // Email validation
//     if (!formData.email) {
//       validationErrors.email = "Email is required.";
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       validationErrors.email = "Invalid email address.";
//     }

//     // First name validation
//     if (!isSignIn && !formData.firstName.trim()) {
//       validationErrors.firstName = "First name is required.";
//     }

//     // Last name validation
//     if (!isSignIn && !formData.lastName.trim()) {
//       validationErrors.lastName = "Last name is required.";
//     }

//     // Password validation
//     if (!formData.password) {
//       validationErrors.password = "Password is required.";
//     } else if (formData.password.length < 8) {
//       validationErrors.password = "Password must be at least 8 characters long.";
//     } else if (!/[A-Z]/.test(formData.password)) {
//       validationErrors.password = "Password must include at least one uppercase letter.";
//     } else if (!/[a-z]/.test(formData.password)) {
//       validationErrors.password = "Password must include at least one lowercase letter.";
//     } else if (!/[0-9]/.test(formData.password)) {
//       validationErrors.password = "Password must include at least one number.";
//     }

//     setErrors(validationErrors);
//     return Object.keys(validationErrors).length === 0;
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     if (!validateForm()) return; // Stop if form is invalid
//     console.log(`Selected Role: ${selectedRole}`);
//     console.log("Form Data:", formData);
//     login(); // Trigger login callback
//     navigate("/"); // Redirect to the homepage
//   };

//   return (
//     <div className="signin-signup-card">
//       {/* Left Section: Logo */}
//       <div className="card-left">
//         <img src={Logo} alt="Company Logo" className="company-logo" />
//       </div>

//       {/* Right Section: Form */}
//       <div className="card-right">
//         <h2>{isSignIn ? "Sign In" : "Sign Up"}</h2>
//         <form onSubmit={handleFormSubmit}>
//           <div className="form-group">
//             <label htmlFor="role">Login As:</label>
//             <select
//               id="role"
//               value={selectedRole}
//               onChange={handleRoleChange}
//               className="form-dropdown"
//               required
//             >
//               <option value="Vendor">Vendor</option>
//               <option value="Client">Client</option>
//             </select>
//           </div>
//           {!isSignIn && (
//             <>
//               <div className="form-group">
//                 <label htmlFor="firstName">First Name</label>
//                 <input
//                   type="text"
//                   id="firstName"
//                   name="firstName"
//                   value={formData.firstName}
//                   onChange={handleInputChange}
//                   placeholder="Enter your first name"
//                 />
//                 {errors.firstName && <small className="error-text">{errors.firstName}</small>}
//               </div>
//               <div className="form-group">
//                 <label htmlFor="lastName">Last Name</label>
//                 <input
//                   type="text"
//                   id="lastName"
//                   name="lastName"
//                   value={formData.lastName}
//                   onChange={handleInputChange}
//                   placeholder="Enter your last name"
//                 />
//                 {errors.lastName && <small className="error-text">{errors.lastName}</small>}
//               </div>
//             </>
//           )}
//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               placeholder="Enter your email"
//             />
//             {errors.email && <small className="error-text">{errors.email}</small>}
//           </div>
//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={formData.password}
//               onChange={handleInputChange}
//               placeholder="Enter your password"
//             />
//             {errors.password && <small className="error-text">{errors.password}</small>}
//           </div>
//           <button type="submit" className="form-button">
//             {isSignIn ? "Sign In" : "Sign Up"}
//           </button>
//         </form>
//         <p className="toggle-text">
//           {isSignIn ? "Don't have an account?" : "Already have an account?"}{" "}
//           <span onClick={toggleForm} className="toggle-link">
//             {isSignIn ? "Sign Up" : "Sign In"}
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Logo from "../../assests/YaChit_Logo_Default.png";
import "./Login.css";

const Login = ({ onLogin }) => {
  const [isSignIn, setIsSignIn] = useState(true); // Toggle between Sign In and Sign Up
  const [selectedRole, setSelectedRole] = useState("Client"); // Dropdown state
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  const [errors, setErrors] = useState({});
  const { login } = useAuth(); // Access the login function from context
  const navigate = useNavigate();

  // Sample user data for validation
  const userData = [
    { email: "yash@gmail.com", password: "User1234", role: "Vendor" },
    { email: "chitransh@gmail.com", password: "Client1234", role: "Client" },
  ];

  const toggleForm = () => {
    setIsSignIn(!isSignIn); // Toggle between Sign In and Sign Up forms
  };

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value); // Update the selected role
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let validationErrors = {};

    // Email validation
    if (!formData.email) {
      validationErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      validationErrors.email = "Invalid email address.";
    }

    // Password validation
    if (!formData.password) {
      validationErrors.password = "Password is required.";
    } else if (formData.password.length < 8) {
      validationErrors.password = "Password must be at least 8 characters long.";
    }

    // Additional validations for Sign Up
    if (!isSignIn) {
      if (!formData.firstName.trim()) {
        validationErrors.firstName = "First name is required.";
      }
      if (!formData.lastName.trim()) {
        validationErrors.lastName = "Last name is required.";
      }
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return; // Stop if form is invalid

    if (isSignIn) {
      // Validate email and password against userData
      const user = userData.find(
        (user) => user.email === formData.email && user.password === formData.password
      );

      if (user) {
        login(); // Trigger login callback
        navigate("/"); // Redirect to the homepage
      } else if (user.email != formData.email) {
        setErrors({ email: "Invalid email." });
      } else {
        setErrors({ email: "Invalid password." });
      }
    } else {
      console.log("Sign up successful. Form data:", formData);
      // You can add sign-up logic here
      navigate("/"); // Redirect to a welcome page after sign-up
    }
  };

  return (
    <div className="signin-signup-card">
      {/* Left Section: Logo */}
      <div className="card-left">
        <img src={Logo} alt="Company Logo" className="company-logo" />
      </div>

      {/* Right Section: Form */}
      <div className="card-right">
        <h2>{isSignIn ? "Sign In" : "Sign Up"}</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="role">Login As:</label>
            <select
              id="role"
              value={selectedRole}
              onChange={handleRoleChange}
              className="form-dropdown"
              required
            >
              <option value="Vendor">Vendor</option>
              <option value="Client">Client</option>
            </select>
          </div>
          {!isSignIn && (
            <>
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="Enter your first name"
                />
                {errors.firstName && <small className="error-text">{errors.firstName}</small>}
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Enter your last name"
                />
                {errors.lastName && <small className="error-text">{errors.lastName}</small>}
              </div>
            </>
          )}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
            />
            {errors.email && <small className="error-text">{errors.email}</small>}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
            />
            {errors.password && <small className="error-text">{errors.password}</small>}
          </div>
          <button type="submit" className="form-button">
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
        </form>
        <p className="toggle-text">
          {isSignIn ? "Don't have an account?" : "Already have an account?"}{" "}
          <span onClick={toggleForm} className="toggle-link">
            {isSignIn ? "Sign Up" : "Sign In"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
