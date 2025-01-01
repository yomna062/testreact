// /import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top p-0">
        <div className="container">

          <NavLink className="navbar-brand fs-1 fw-bold" to="/home">Start Framework</NavLink>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto"> 
              
              <li className="nav-item fs-6 fw-bold mx-2">
                <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/about">About</NavLink>
              </li>
             
              <li className="nav-item fs-6 fw-bold mx-2">
                <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/portfolio">Portfolio</NavLink>
              </li>
              <li className="nav-item fs-6 fw-bold mx-2">
                <NavLink className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
