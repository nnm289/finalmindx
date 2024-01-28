import React from "react";
import "./header.css";
import { NavLink as Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <h1>#todo</h1>
      </div>
      <div className="NavBar">
        <Link to="/" className="NavItem">
          All
        </Link>
        <Link to="/active" className="NavItem">
          Active
        </Link>
        <Link to="/done" className="NavItem">
          Done
        </Link>
      </div>
    </div>
  );
};
export default Header;
