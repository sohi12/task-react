import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <>
      
      {/* <div className="container"> */}
      <nav id="navbar-example2" className="navbar fixed-top px-3 mb-3">
  <Link className="navbar-brand fw-bold fs-2 "to={"/start"}>START FRAMEWORK</Link>
  <ul className="nav nav-pills">
    <li className="nav-item">
      <Link className="nav-link text-white" to={"/about"}>ABOUT</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link text-white" to={"/portfolio"}>PORTFOLIO</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link text-white" to={"/contact"}>CONTACT</Link>
    </li>
    
  </ul>
 </nav>
      {/* </div> */}
     

      </>
    )
  }
}
