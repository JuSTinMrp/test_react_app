// RecentScans.js

import React from "react";
import SideNavBar from "../components/SideNavBar/SideNavBar";
import Navbar from "../components/Navbar/Navbar";
import "./css/RecentScans.css";

const RecentScans = () => {
  return (
    <div className="sidebar">
      <SideNavBar />
      <div className="content-container">
        <div className="navbar1">
          <Navbar />
        </div>
        <div className="centered-content">
          <h2>Centered Content</h2>
        </div>
      </div>
    </div>
  );
};

export default RecentScans;
