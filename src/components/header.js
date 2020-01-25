import { Link, graphql, useStaticQuery } from "gatsby";
import React, { useState } from "react";
import logo from "../images/A01-tensure_logo_main_rgb.png";
import headerStyles from "./header.module.scss";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const toggleMenu = () => {
    if (!activeMenu) {
      setActiveMenu(true);
    } else {
      setActiveMenu(false)
    }
  };

  return (
    <header className={headerStyles.header}>
      <nav
        className='navbar is-fixed-top'
        role='navigation'
        aria-label='main navigation'
        expand='sm'
      >
        <div className='navbar-brand'>
          <a className='navbar-item' href='/'>
            <img src={logo} alt='Tensure Consulting'></img>
          </a>
          <a
            className={
              activeMenu
                ? "navbar-burger burger is-active"
                : "navbar-burger burger"
            }
            role='button'
            onClick={toggleMenu}
          >
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </a>
        </div>
        <div
          id='navbarBasicExample'
          className={
            activeMenu ? "navbar-menu is-active" : "navbar-menu"
          }
        >
          <div className='navbar-start'></div>
          <div className='navbar-end'>
            <div className='navbar-item'>
              <div className='buttons'>
                <Link className='button is-primary' to='/'>
                  <strong>Home</strong>
                </Link>
                <Link className='button is-primary' to='/about/'>
                  <strong>About</strong>
                </Link>
                <Link className='button is-primary' to='/blog/'>
                  <strong>Blog</strong>
                </Link>
                <Link className='button is-primary' to='/team/'>
                  <strong>Team</strong>
                </Link>
                <Link className='button is-primary' to='/contact/'>
                  <strong>Contact</strong>
                </Link>
                <Link className='button is-primary' to='/tags/'>
                  <strong>Tags</strong>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
