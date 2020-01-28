import { Link } from "gatsby";
import React, { useState } from "react";
import logo from "../images/A01-tensure_logo_main_rgb.png";
import headerStyles from "./header.module.scss";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(false);

  const toggleMenu = () => {
    if (!activeMenu) {
      setActiveMenu(true);
    } else {
      setActiveMenu(false);
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
          className={activeMenu ? "navbar-menu is-active" : "navbar-menu"}
        >
          <div className='navbar-start'></div>
          <div className='navbar-end'>
            <div className='navbar-item'>
              <div className='buttons'>

                <Link className='button is-primary is-small' to='/portfolio'>
                  <i className='fas fa-briefcase'></i>
                  <span className='ml-1'>PORTFOLIO</span>
                </Link>
                <Link className='button is-primary is-small' to='/about/'>
                  <i className='fas fa-globe'></i>
                  <span className='ml-1'>SERVICES</span>
                </Link>
                <Link className='button is-primary is-small' to='/blog/'>
                  <i className='fas fa-blog'></i>
                  <span className='ml-1'>BLOG</span>
                </Link>
                <Link className='button is-primary is-small' to='/team/'>
                  <i className='fas fa-users'></i>
                  <span className='ml-1'>TEAM</span>
                </Link>
                <Link className='button is-black is-small' to='/contact/'>
                  <i className='fas fa-address-book'></i>
                  <span className='ml-1'>CONTACT</span>
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
