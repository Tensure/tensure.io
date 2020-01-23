import { Link } from "gatsby";
import React from "react";
import logo from "../images/A01-tensure_logo_main_rgb.png";

export default class Header extends React.Component {
  state = {
    activeMenu: false
  };
  toggleMenu = () => {
    this.setState({
      activeMenu: !this.state.activeMenu
    });
  };
  render() {
    return (
      <nav
        className='navbar is-fixed-top'
        role='navigation'
        aria-label='main navigation'
        expand="sm"
      >
        <div className='navbar-brand'>
          <a className='navbar-item' href='/'>
            <img src={logo} alt='Tensure Consulting'></img>
          </a>
          <a
            className={
              this.state.activeMenu
                ? "navbar-burger burger is-active"
                : "navbar-burger burger"
            }
            role='button'
            onClick={this.toggleMenu}
          >
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </a>
        </div>
        <div
          id='navbarBasicExample'
          className={
            this.state.activeMenu ? "navbar-menu is-active" : "navbar-menu"
          }
        >
          <div className='navbar-start'></div>
          <div className='navbar-end'>
            <div className='navbar-item'>
              <div className='buttons'>
                <Link className='button is-primary' to='/about/'>
                  <strong>About</strong>
                </Link>
                <Link className='button is-primary' to='/blog/'>
                  <strong>Blog</strong>
                </Link>
                <Link className='button is-primary' to='/team/'>
                  <strong>Team</strong>
                </Link>
                <Link className='button is-primary' to='/tags/'>
                  <strong>Tags</strong>
                </Link>
                <Link className='button is-primary' to='/contact/'>
                  <strong>Contact</strong>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
