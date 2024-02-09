import React, { useState } from "react";
import "./SideNavBar.css";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
const SideNavBar = () => {
  const [isExpanded, setExpendState] = useState(true);
 const [dropdownStates, setDropdownStates] = useState({});

 const toggleDropdown = (item) => {
   setDropdownStates((prev) => ({
     ...prev,
     [item]: !prev[item],
   }));
 };
  const menuItems = [
    {
      text: "Information",
      icon: "icons/info.svg",
      to: "/Information",
    },
    {
      text: "Scan options",
      icon: "icons/scanoption.svg",
      to: "/Scan_options",
    },
    {
      text: "Signer Certificate",
      icon: "icons/signercertf.svg",
      to: "/Signer_Certificate",
    },
    {
      text: "Permissions",
      icon: "icons/permission.svg",
      to: "/Permissions",
    },
    {
      text: "android Api",
      icon: "icons/androidapi.svg",
      to: "/android_Api",
    },
    {
      text: "Security Analysis",
      icon: "icons/securityanalysis.svg",

      subItems: [
        {
          text: "Network Security",
          icon: "icons/Network.svg",
          to: "/Network_Security",
        },
        {
          text: "Certificate Analysis",
          icon: "icons/Certificate.svg",
          to: "/Certificate",
        },
        {
          text: "Manifest Analysis",
          icon: "icons/manifest.svg",
          to: "/Manifest",
        },
        { text: "Code Analysis", icon: "icons/Code.svg", to: "/Code" },
        {
          text: "Binary Analysis",
          icon: "icons/binary.svg",
          to: "/Binary",
        },
        {
          text: "NIAP Analysis",
          icon: "icons/permission.svg",
          to: "/NIAP",
        },
        { text: "File Analysis", icon: "icons/File.svg", to: "/File_Analysis" },
      ],
    },
    {
      text: "Reconnaissance",
      icon: "icons/Reconnisance.svg",

      subItems: [
        { text: "URLs", icon: "icons/subitem1.svg", to: "/URLs" },
        { text: "Firebase DB", icon: "icons/DB.svg", to: "/Firebase" },
        { text: "Emails", icon: "icons/Email.svg", to: "/Emails" },
        { text: "Trackers", icon: "icons/subitem3.svg", to: "/Trackers" },
        {
          text: "Hardcoded Secrets",
          icon: "icons/secret.svg",
          to: "/Hardcoded",
        },
        { text: "Strings", icon: "icons/subitem3.svg", to: "/Strings" },
        // Add more subitems as needed
      ],
    },
    {
      text: "Components",
      icon: "icons/settings.svg",
      subItems: [
        { text: "Activities", icon: "icons/subitem1.svg", to: "/Activities" },
        { text: "Services", icon: "icons/subitem2.svg", to: "/Services" },
        { text: "Receivers", icon: "icons/subitem3.svg", to: "/Receivers" },
        { text: "Providers", icon: "icons/subitem3.svg", to: "/Providers" },
        { text: "Libraries", icon: "icons/subitem3.svg", to: "/Libraries" },
        { text: "Files", icon: "icons/subitem3.svg", to: "/Files" },
        // Add more subitems as needed
      ],
    },
    {
      text: "Pdf Report",
      icon: "icons/report.svg",
      to: "/Information",
    },
    {
      text: "Print  Report",
      icon: "icons/report.svg",
      to: "/Information",
    },
  ];


  return (
    <div
      className={
        isExpanded
          ? "side-nav-container"
          : "side-nav-container side-nav-container-NX" //false
      }
    >
      <div className="nav-upper">
        <div className="nav-heading">
          {isExpanded && (
            <div className="nav-brand">
              <img src="icons/Logo.svg" alt="" srcset="" />
              <h2>Hebesec</h2>
            </div>
          )}
          <button
            className={
              isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
            }
            onClick={() => setExpendState(!isExpanded)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className="nav-menu">
          <div className="menu-container">
            {menuItems.map(({ text, icon, subItems, to }) => (
              <div key={text} className="menu-item-wrapper">
                {subItems ? (
                  <div className="menu-item-dropdown">
                    <Link
                      to={to} // Add this line
                      className={
                        isExpanded ? "menu-item" : "menu-item menu-item-NX"
                      }
                      onClick={() => toggleDropdown(text)}
                    >
                      <img className="menu-item-icon" src={icon} alt="" />
                      {isExpanded && <p>{text}</p>}
                    </Link>

                    {isExpanded && (
                      <div
                        className="dropdown-icon"
                        onClick={() => toggleDropdown(text)}
                      >
                        <FaAngleDown />
                      </div>
                    )}
                    <div
                      className="dropdown-content"
                      style={{
                        display: dropdownStates[text] ? "block" : "none",
                      }}
                    >
                      {subItems.map(
                        ({ text: subText, icon: subIcon, to: subto }) => (
                          <Link
                            to={subto}
                            className={
                              isExpanded
                                ? "menu-item"
                                : "menu-item menu-item-NX"
                            }
                            key={subText}
                          >
                            <img
                              className="menu-item-icon"
                              src={subIcon}
                              alt=""
                            />
                            {isExpanded && <p>{subText}</p>}
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={to} // Add this line
                    className={
                      isExpanded ? "menu-item" : "menu-item menu-item-NX"
                    }
                  >
                    <img
                      className="menu-item-icon"
                      src={icon}
                      alt=""
                      srcSet=""
                    />
                    {isExpanded && <p>{text}</p>}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="nav-footer">
        {isExpanded && (
          <div className="nav-details">
            <img
              className="nav-footer-avatar"
              src="icons/admin-avatar.svg"
              alt=""
              srcset=""
            />
            <div className="nav-footer-info">
              <p className="nav-footer-user-name">Hebesec</p>
              <p className="nav-footer-user-position">Product</p>
            </div>
          </div>
        )}
        <img className="logout-icon" src="icons/logout.svg" alt="" srcset="" />
      </div>
    </div>
  );
};

export default SideNavBar;
