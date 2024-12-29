import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"
import { useAuth } from "./context/AuthContext";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
// import Dashboard from "./pages/Dashboard";
import Services from "./pages/Services";
import Login from "./pages/Login/Login";
import Contact from "./pages/Contact";
// import DashboardSidebar from "./components/DashboardSidebar";
// import ServiceDashboard from "./pages/ServiceDashboard";
import Domestic from "./pages/services/Domestic/Domestic";

const App = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  const { isLoggedIn } = useAuth();

  // const navigate = useNavigate();

  const handleLogin = () => {
    // setIsLoggedIn(true); // Set login state to true
    console.log("From App.js: "+isLoggedIn);
  };

  // const handleLogout = () => {
  //   setIsLoggedIn(false); // Set login state to true
  // };

  // return (
  //   <Router>
  //     <Header isLoggedIn={isLoggedIn} />
  //     <div className="main-content">
  //       <Routes>
  //         <Route path="/" element={<Home />} />
  //         <Route path="/signin" element={<Login onLogin={handleLogin} />} />
  //           {isLoggedIn && (
  //               <>
  //               <Route path="/services" element={<Services />} />
  //               <Route path="/contact" element={<Contact />} />
  //             </>
  //           )}
  //         {/* <Route path="/services" element={<Services />} />
  //         <Route path="/contact" element={<Contact />} /> */}
  //         <Route path="/Login" element={<Login />} />
  //         <Route path="/services/:serviceName" element={<Domestic />} />
  //       </Routes>
  //     </div>
  //     <Footer />
  //   </Router>
  // );
  return (
        <Router>
          {/* <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} /> */}
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            {/* <Route path="/services/domestic" element={<Domestic />} /> */}
            {isLoggedIn && (
              <>
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services/domestic" element={<Domestic />} />
              </>
            )}
          </Routes>
          <Footer />
        </Router>
      );  
}

export default App;


// import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Header from "./components/Header";
// import Home from "./pages/Home";
// import Services from "./pages/Services";
// import Contact from "./pages/Contact";
// import Login from "./components/Login";

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state

//   const handleLogin = () => {
//     setIsLoggedIn(true); // Set login state to true
//   };

//   return (
//     <Router>
//       <Header isLoggedIn={isLoggedIn} />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/signin" element={<Login onLogin={handleLogin} />} />
//         {isLoggedIn && (
//           <>
//             <Route path="/services" element={<Services />} />
//             <Route path="/contact" element={<Contact />} />
//           </>
//         )}
//       </Routes>
//     </Router>
//   );
// };

// export default App;

