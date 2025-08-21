import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div data-role="Header" className="header-header">
      <nav className="header-nav">
        <div className="header-container1">
          <Link to="/login" className="header-navlink1 Large">
            Soft UI Design System
          </Link>
          <div className="header-menu1">
            <Link to="/" className="header-navlink2 Large">
              Home
            </Link>
            <Link to="/profile" className="header-navlink3 Large">
              Profile
            </Link>
            <Link to="/gallery" className="header-navlink4 Large">
              gallery
            </Link>
          </div>
          <div className="header-container2">
            <div className="header-container3">
              <div className="primary-pink-button-container">
                <button
                  className="primary-pink-button-button button ButtonSmall"
                  onClick={() => handleLogin()}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* <div data-role="MobileMenu" className="header-mobile-menu">
        <div className="header-top">
          <Link to="/" className="header-navlink5 Large">
            Soft UI Design System
          </Link>
          <div data-role="CloseMobileMenu" className="header-close-menu">
            <svg viewBox="0 0 1024 1024" className="header-icon3">
              <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
            </svg>
          </div>
        </div>
        <div className="header-mid">
          <div className="header-menu2">
            <Link to="/" className="header-navlink6 Large">
              Home
            </Link>
            <Link to="/profile" className="header-navlink7 Large">
              Profile
            </Link>
            <Link to="/coming-soon" className="header-navlink8 Large">
              Coming Soon
            </Link>
          </div>
        </div>
        <div className="header-bot">
           <div className="primary-pink-button-container">
      <button className="primary-pink-button-button button ButtonSmall">
        Login
      </button>
    </div>
        </div>
      </div> */}
    </div>
  );
};

export default Header;
