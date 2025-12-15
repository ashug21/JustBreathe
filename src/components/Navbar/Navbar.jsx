import React from "react";
import "./Navbar.css";
import Logo from '../../assets/Logo.png'
import Logo2 from '../../assets/nobglogo.png'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar1">
      <div className="nav-left1">
       <Link to="/">  <img src={Logo2} alt="Logo" className="nav-logo1" /> </Link>
      </div>

      <ul className="nav-links1">
        <Link to="/" className="nav-item1"> Home</Link>
        <Link to="/book-class" className="nav-item1">Book Demo Class</Link>
        <Link to="/timings" className="nav-item1">Timings</Link>
        <Link to="/gallery" className="nav-item1">Gallery</Link>
        <Link to="/enquiry" className="nav-item1">Enquiry</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
