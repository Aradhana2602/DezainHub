import React from "react";
import Sidebar from "./sidebar";
import Header from "./header";
import Timesheet from "./timesheet";
import Statistics from "./statistics";
import ActiveToday from "./activetoday";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar on the left */}
      <Sidebar />

      {/* Main content area */}
      <div className="dashboard-content">
        <Header />

        {/* Timesheet, Statistics, and ActiveToday below Header */}
        <div className="main-content">
          <Timesheet />
          <Statistics />
          <div className="right-section">
           
            <ActiveToday />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
