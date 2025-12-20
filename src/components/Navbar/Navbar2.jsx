import React from "react";
import "./Navbar.css";
import Logo2 from "../../assets/nobglogo.png";
import { Link, useNavigate } from "react-router-dom";

const Navbar2 = () => {
  const navigate = useNavigate();

  const logoutAdmin = () => {
    localStorage.removeItem("isAdmin");
    navigate("/");
  };

  return (
    <nav className="navbar1">
      <div className="nav-left1">
        <Link to="/">
          <img src={Logo2} alt="Logo" className="nav-logo1" />
        </Link>
      </div>

      <ul className="nav-links1">

        <span className="nav-item1" onClick={logoutAdmin}>Logout</span>
      </ul>
    </nav>
  );
};

export default Navbar2;
