import React from "react";
import "./statistics.css";

const Statistics = () => {
  return (
    <div className="statistics-card">
      <h3>Statistics</h3>
      <div className="stats-item">
        <p>This Week <span>28/40 hrs</span></p>
        <div className="progress-bar"><div className="progress this-week"></div></div>
      </div>
      <div className="stats-item">
        <p>This Month <span>28/40 hrs</span></p>
        <div className="progress-bar"><div className="progress this-month"></div></div>
      </div>
      <div className="stats-item">
        <p>Remaining <span>28/40 hrs</span></p>
        <div className="progress-bar"><div className="progress remaining"></div></div>
      </div>
      <div className="stats-item">
        <p>Overtime <span>28/40 hrs</span></p>
        <div className="progress-bar"><div className="progress overtime"></div></div>
      </div>
    </div>
  );
};

export default Statistics;
