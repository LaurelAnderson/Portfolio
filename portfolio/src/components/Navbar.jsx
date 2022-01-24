import React from "react";
import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <div className="navbar">

      <div className="container">

        <NavLink to="/">
          Laurel Anderson
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
              <li>
                <NavLink to="/projects">
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact">
                  Contact Me
                </NavLink>
              </li>
            </ul>
          </div>
      </div>
    </div>
  )
}

export default Navbar;