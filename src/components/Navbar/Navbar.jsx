import "./Navbar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const dropdown = () => {
    setShowLinks(!showLinks)
  };

  return (
    <div id="Navbar">
      <div className="navbar">
        <Link to="/" className="btn">
          Home
        </Link>
        <Link to="/Projects" className="btn">
          Projects
        </Link>
        <Link to="/" className="btn">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;