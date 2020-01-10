import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/A01-tensure_logo_main_rgb.png"



export default class extends React.Component {
  state = {
    activeMenu: false
  }
  toggleMenu = () => {
    this.setState({
      activeMenu: !this.state.activeMenu
    });
  }
  render() {
    return (
      <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src={logo} alt="Tensure Consulting"></img>
          </a>
          <a className={this.state.activeMenu ? 'navbar-burger burger is-active' : 'navbar-burger burger'} role="button" onClick={this.toggleMenu}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbarBasicExample" className={this.state.activeMenu ? 'navbar-menu is-active' : 'navbar-menu'}>
          <div className="navbar-start"></div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary" href="/contact">
                  <strong>Contact</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>)
  }
}
