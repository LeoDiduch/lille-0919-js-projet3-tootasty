import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./styles/Navbar.scss";
import { siteTitle } from "../conf.js";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="TopBar">
      <nav>
        <div className="navbarContainer">
          <NavLink className="logoAndTitle" exact to="/">
            <p>ttt</p>
            <p>{siteTitle}</p>
          </NavLink>

          <div className="menu">
            <NavLink activeClassName="active" to="/meetings">
              Rencontres
            </NavLink>
            <NavLink activeClassName="active" to="/ambassadors">
              Ambassadeurs
            </NavLink>
            <NavLink activeClassName="active" to="/causes">
              Causes soutenues
            </NavLink>
            <NavLink activeClassName="active" to="/blog">
              Blog
            </NavLink>
          </div>
        </div>

        <div className="mobileNavbar">
          <NavLink exact to="/">
            ttt
          </NavLink>
          <NavLink exact to="/">
            {siteTitle}
          </NavLink>
          <div
            className="burger"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <span className={isMenuOpen ? "isCrossed" : ""}></span>
          </div>
        </div>
      </nav>

      <div className={isMenuOpen ? "menuMobile isOpen" : "menuMobile"}>
        <NavLink
          activeClassName="activeMobile"
          to="/meetings"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          Rencontres
        </NavLink>
        <NavLink
          activeClassName="activeMobile"
          to="/ambassadors"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          Ambassadeurs
        </NavLink>
        <NavLink
          activeClassName="activeMobile"
          to="/causes"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          Causes soutenues
        </NavLink>
        <NavLink
          activeClassName="activeMobile"
          to="/blog"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          Blog
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
