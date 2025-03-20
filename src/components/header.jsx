import React from "react";
import "./header.css";
import { FaBullhorn } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <h2>Hi, Saurav</h2>
        <p>Welcome to your Dashboard</p>
      </div>

      <div className="header-right">
        <div className="notification">
          <FaBullhorn className="notification-icon" />
          <span className="notification-badge">2</span>
        </div>
        <div className="profile">
          <img src="/assets/Image.png" alt="Profile" className="profile-pic" />
          <div className="profile-text">
            <span className="profile-name">Saurav Kumar</span>
            <span className="profile-role">Lead Developer</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
