import React from "react";
import "./style.css";
import logo from "./Logo.png";

export default function Navbar() {
  return (
    <div className="Navbar">
      <img src={logo} className="logo" alt="" />
      <ul className="Navbar_content">
        <li className="nav_list">
          <a href="https://github.com/Jangidyogesh12/FlickPilot_Source">
            Source Code
          </a>
        </li>
      </ul>
    </div>
  );
}
