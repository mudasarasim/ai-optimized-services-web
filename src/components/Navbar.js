import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faUser,
  faBars,
  faTimes,
  faRightToBracket,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const checkLoginStatus = () => {
      const token = localStorage.getItem("userToken");
      setIsLoggedIn(!!token);
    };

    checkLoginStatus();

    window.addEventListener("loginStatusChanged", checkLoginStatus);

    return () => {
      window.removeEventListener("loginStatusChanged", checkLoginStatus);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <header className="header-style1 menu_area-light">
      <div className="navbar-default">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="menu_area alt-font">
                <nav className="navbar navbar-expand-lg navbar-light p-0 current">
                  <div className="navbar-header navbar-header-custom">
                    <Link to="/" className="navbar-brand">
                      <img
                        id="logo"
                        src="img/aio.png"
                        alt="logo"
                        className="logo-img"
                      />
                    </Link>
                  </div>

                  {/* Hamburger Toggle */}
                  <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleMenu}
                  >
                    <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
                  </button>

                  {/* Nav Items */}
                  <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
                    <ul className="navbar-nav ml-auto" id="nav">
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/about">About Us</Link></li>
                      <li><Link to="/services">Services</Link></li>
                      <li><Link to="/contact">Contact Us</Link></li>
                      {!isLoggedIn ? (
                        <li><Link to="/login">Login</Link></li>
                      ) : (
                        <li><button className="btn btn-link nav-link" onClick={handleLogout}>Logout</button></li>
                      )}
                       {!isLoggedIn ? (
                        <li><Link to="/signup">Sign Up</Link></li>
                      ) : (
                        <li><button className="btn btn-link nav-link" onClick={handleLogout}></button></li>
                      )}
                    </ul>
                  </div>

                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

  );
};

export default Navbar;
