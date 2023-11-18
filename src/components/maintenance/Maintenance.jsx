import React from "react";
import MaintenanceLogo from "../../assets/maintenance.png";
import "./maintenance.css";

const Maintenance = () => {

  return (
    <div className="m" style={{height: '100vh'}}>
        <div className="m-item">
            <img  className="m-img" src={MaintenanceLogo} alt="Maintenance Logo" />
            <h1>This area cannot be accessed right now, we are going under a maintenance</h1>
        </div>
    </div>
  );
};

export default Maintenance;
