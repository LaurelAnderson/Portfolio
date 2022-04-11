import React from "react";
import { NavLink } from "react-router-dom"

function Navigation() {
  return (
    <div class="navigation">

      <nav className="navbar navbar-expand-lg navbar-light bg-light">

        <div class="container">

          <NavLink className="navbar-brand" to="/">
            Laurel Anderson
          </NavLink>

          <div>
            <ul class="navbar-nav">
              <li class="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" to="/projects">
                  Projects
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact Me
                </NavLink> 
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navigation;