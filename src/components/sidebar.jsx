import React from "react";
import { Link } from "react-router-dom";
import {FaHome, FaClock, FaUsers, FaMoneyCheckAlt, FaCog, FaSignOutAlt} from "react-icons/fa"; 
import "./sidebar.css"; // Import CSS for styling

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="menu">
      <img src="/assets/logo2.svg" alt="Logo" className="logo" />
        <Link to="/dashboard" className="menu-item">
          <FaHome className="icon" /> Dashboard
        </Link>
        <Link to="/profile" className="menu-item">
          <FaClock className="icon" /> Profile
        </Link>
        <Link to="/teams" className="menu-item">
          <FaUsers className="icon" />Teams
        </Link>
        <Link to="/profile" className="menu-item">
          <FaMoneyCheckAlt className="icon" /> Payroll
        </Link>

        {/* Push these to the bottom */}
        <div className="bottom-items">
          <Link to="/settings" className="menu-item">
            <FaCog className="icon" /> Settings
          </Link>
          <Link to="/logout" className="menu-item">
            <FaSignOutAlt className="icon" /> Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
