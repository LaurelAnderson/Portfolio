import React from "react";
import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <div className="navbar">

      <div className="container">

        <NavLink to="/">
          React Multi-Page Website
        </NavLink>
          <div>
            <ul>
              <li>
                <NavLink to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about">
                  About
                </NavLink>
              </li>
            </ul>
          </div>
      </div>
    </div>
  )
}

export default Navbar;