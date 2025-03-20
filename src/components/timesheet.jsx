import React from "react";
import "./timesheet.css";

const Timesheet = () => {
  return (
    <div className="timesheet-card">
      <h3>Timesheet</h3>
      <p>Wed, 13 Dec, 2024</p>
      <div className="progress-circle">
        <span>04:23:36</span>
        <p>Ongoing Time</p>
      </div>
      <p>Clocked in at: <strong>10:32:24</strong></p>
      <p>Clocked out at: <strong>--:--:--</strong></p>
      <button className="clock-in">Clock In</button>
      <button className="adjust-time" disabled>Adjust Time</button>
    </div>
  );
};

export default Timesheet;
