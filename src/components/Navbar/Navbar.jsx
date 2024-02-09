import React, { useRef, useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
     const [menu, setmenu] = useState("");
     const menuref = useRef();
    const dropdown_toggle = (e) => {
      menuref.current.classList.toggle("nav-menu-visible");
      e.target.classList.toggle("open");
    };

  return (
    <div className="navbar">
     
        <FontAwesomeIcon
          className="mobile-icon"
          onClick={dropdown_toggle}
          icon={faBars}
        />
     

      <ul ref={menuref} className="nav-menus">
        <li
          onClick={() => {
            setmenu("RecentScans");
          }}
        >
          <Link to="/RecentScans" style={{ textDecoration: "none" }}>
            Recent Scans
          </Link>
          {menu === "RecentScans" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setmenu("StaticAnalyzer");
          }}
        >
          <Link to="/StaticAnalyzer" style={{ textDecoration: "none" }}>
            Static Analyzer
          </Link>
          {menu === "StaticAnalyzer" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setmenu("Donate");
          }}
        >
          <Link to="/Donate" style={{ textDecoration: "none" }}>
            {" "}
            Donate
          </Link>{" "}
          {menu === "Donate" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setmenu("Docs");
          }}
        >
          <Link to="/Docs" style={{ textDecoration: "none" }}>
            Docs
          </Link>
          {menu === "Docs" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setmenu("About");
          }}
        >
          <Link to="/About" style={{ textDecoration: "none" }}>
            About
          </Link>
          {menu === "About" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <button onClick={() => setmenu("newscan")}>
          <Link to="/newscan" style={{ textDecoration: "none" }}>
            New Scan
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Navbar
