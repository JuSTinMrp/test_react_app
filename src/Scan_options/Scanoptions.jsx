import React from 'react'
import SideNavBar from '../components/SideNavBar/SideNavBar';
import Navbar from '../components/Navbar/Navbar';

const Scanoptions = () => {
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

export default Scanoptions