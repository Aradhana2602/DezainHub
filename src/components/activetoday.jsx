import React from "react";
import "./activetoday.css";

const employees = [
  { id: 1, name: "Sourav K...", image: "/assets/Image.png" },
  { id: 2, name: "Sourav K...", image: "/assets/Image.png" },
  { id: 3, name: "Sourav K...", image: "/assets/Image.png" },
  { id: 4, name: "Sourav K...", image: "/assets/Image.png" }
];

const ActiveToday = () => {
  return (
    <div className="active-today">
      <div className="active-header">
        <h3>Active Today</h3>
        <a href="#" className="see-all">See All</a>
      </div>
      <p>40 employees are active today.</p>
      <div className="employee-list">
        {employees.map((emp) => (
          <div key={emp.id} className="employee">
            <img src={emp.image} alt={emp.name} />
            <span>{emp.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveToday;
