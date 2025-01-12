// NavigationBar.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppleAlt, faCookie, faPhone, faSeedling } from "@fortawesome/free-solid-svg-icons";
import "../css/NavigationBar.css";

const NavigationBar = () => {
  return (
    <nav className="navbar">

        
      <div className="logo">
        <span className="gold-text">רותי עיצובי פירות</span>
      </div>
      <ul className="nav-links">
        <li>
          <a href="/fruits">
            <FontAwesomeIcon icon={faAppleAlt} className="icon" />
            עיצובי פירות
          </a>
        </li>
        <li>
          <a href="/bars">
            <FontAwesomeIcon icon={faSeedling} className="icon" />
            עיצובי בארים
          </a>
        </li>
        <li>
          <a href="#patisseries">
            <FontAwesomeIcon icon={faCookie} className="icon" />
            פטיפורים
          </a>
        </li>
        <li>
          <a href="#contact">
            <FontAwesomeIcon icon={faPhone} className="icon" />
            יצירת קשר
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
