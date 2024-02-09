import React from 'react'
import SideNavBar from '../components/SideNavBar/SideNavBar'
 import Navbar from '../components/Navbar/Navbar'


const Home = () => {
  return (
    <div className="home">
      <SideNavBar />
      <div className="navbar">
        <Navbar />
      </div>
    </div>
  );
}

export default Home