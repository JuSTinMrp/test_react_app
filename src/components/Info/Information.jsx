import React from 'react'
import SideNavBar from '../SideNavBar/SideNavBar'
import Navbar from '../Navbar/Navbar'
import "./Information.css"
const Information = () => {
  return (
    <div className="sidebar">
      <SideNavBar />
      <div className="content-container">
        <div className="navbar1">
          <Navbar />
        </div>
        
      </div>
    </div>
  );
}

export default Information