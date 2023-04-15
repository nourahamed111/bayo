import React from 'react'
import logo from "../img/logo.png";
import "./logo.scss";
export default function Logo() {
  return (
     <>
    <div className="logo-container">
            <img className="logo-image" src={logo} alt="Logo" />
            <div class="vertical-line"></div>
            <h1>TRANSFER</h1>
          </div>
          </>
  )
}
