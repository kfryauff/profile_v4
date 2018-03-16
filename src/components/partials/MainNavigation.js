import React from 'react'
import { NavLink } from 'react-router-dom'

const MainNavigation = () => (
  <div className="main-navigation">
    <NavLink exact to="/" className="home-icon">K.</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/projects">Projects</NavLink>
    <NavLink to="/skills">Skills</NavLink>
    <NavLink to="/resume">Resume</NavLink>
  </div>
)

export default MainNavigation
