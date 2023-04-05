import React from "react";
import "./navbar.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img
            src="https://ivyproschool.com/wp-content/uploads/2015/07/logo.jpg"
            alt="Logo"
          />
        </div>
        <div className="navbar-courses">
          <button className="navbar-dropdown-btn">
            <span>Courses</span> <KeyboardArrowDownIcon />
          </button>
          <div className="navbar-dropdown-content">
            <a href="#">Course 1</a>
            <a href="#">Course 2</a>
            <a href="#">Course 3</a>
          </div>
        </div>
        <div className="navbar-search">
          <SearchIcon />
          <input type="text" placeholder="Search for anything" />
        </div>
      </div>
      <div className="navbar-links">
        <a href="#">For Business</a>
        <a href="#">Testimonials</a>
        <a href="#">Resources</a>
        <a href="#">Contact</a>
      </div>
      <div className="navbar-signup">
        <button>Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;
