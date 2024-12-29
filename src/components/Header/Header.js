import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import "./Header.css";
import { useAuth } from "../../context/AuthContext";
import Logo from "../../assests/YaChit_Logo_Default.png";

// const Header = ({ isLoggedIn, setIsLoggedIn }) => {
const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const { isLoggedIn, logout } = useAuth();

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const navigate = useNavigate();

  const handleLogoClick = () => {
    if (isLoggedIn) {
        navigate("/"); // Stay logged in and navigate to the homepage
      } else {
        navigate("/login"); // Redirect to login if not logged in
      }
  };

  const handleLogout = () => {
    logout();
    navigate("/"); // Redirect to homepage after logout
  };

  return (
    <>
      <header className="header">
        <div className="header-left">
          <button className="menu-icon" 
                //   onClick={toggleSidebar}
            >
            <span className="menu-icon">☰</span>
          </button>
          {/* <h1 className="logo" onClick={handleLogoClick} role="button" tabIndex="0">YaChit</h1> */}
          <div><img src={Logo} className="logo-image" onClick={handleLogoClick} role="button" /></div>
          
        
        {/* Navigation */}
        </div>
        <div className="header-right">
          <nav className="nav-links">
          {isLoggedIn && (
            <>
                <Link to="/services">Services</Link>
                <Link to="/contact">Contact</Link>
            </>
          )}
          </nav>

          <div className="profile" onClick={toggleDropdown}>
          <FaUserCircle size={28} className="profile-icon" />
                <div className={`dropdown ${showDropdown ? "show" : ""}`}>
                    {/* <Link to="/login">Login</Link> */}
                    {/* {!isLoggedIn ? (
                        <Link to="/login">Login</Link>
                    ) : (
                        <>
                        <Link to="/" onClick={handleLogout}>
                            Logout
                        </Link>
                        </>
                    )} */}
                    {isLoggedIn ? (
                        <button onClick={handleLogout}>Logout</button>
                        ) : (
                        <Link to="/login">Login</Link>
                    )}
                </div>
          </div>
        </div>
      </header>

      {/* <div className={`sidebar ${showSidebar ? "show" : ""}`}>
        <button className="close-btn" onClick={toggleSidebar}>
          ✖
        </button>
        <h2>Dashboard</h2>
        <ul>
          <li>
            <Link to="/dashboard">Domestic Shipping</Link>
          </li>
          <li>
            <Link to="/dashboard">Cargo & Transportation</Link>
          </li>
          <li>
            <Link to="/dashboard">Cross Border Service</Link>
          </li>
          <li>
            <Link to="/dashboard">FTL</Link>
          </li>
          <li>
            <Link to="/dashboard">Packers & Movers</Link>
          </li>
        </ul>
      </div>
      <div
        className={`overlay ${showSidebar ? "show" : ""}`}
        onClick={toggleSidebar}
      ></div> */}
    </>
  );
};

export default Header;


//       {/* Navigation */}
//       <div className="header-right">
//         {isLoggedIn && (
//           <>
//             <Link to="/services">Services</Link>
//             <Link to="/contact">Contact</Link>
//             <Link to="/">abcd</Link>
//           </>
//         )}
//         {/* Profile Icon */}
//         <Link to="/signin" className="profile-icon">
//           <FaUserCircle size={28} />
//         </Link>
//       </div>
//     </header>
//   );
// };

// export default Header;
