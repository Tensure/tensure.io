import React from 'react'

const Footer = () => (
  <div className="site-footer">
    <h4 className="text-center tensure-inc">
    © {new Date().getFullYear()}, Tensure Consulting, Inc.
    </h4>
    <p className="text-center follow-us">Follow us on social media</p>
    <div className="footer-social-links">
      <ul className="social-links-list">
        <li><a href="https://www.facebook.com target="_blank rel="nooperner noreferrer" className="facebook">
          <i class="fab fa-facebook-f fa-2x"></i></a></li>
        <li><a href="https://www.twitter.com target="_blank rel="nooperner noreferrer" className="twitter">
          <i class="fab fa-twitter fa-2x"></i></a></li>
        <li><a href="https://www.instagram.com target="_blank rel="nooperner noreferrer" className="instagram">
          <i class="fab fa-instagram fa-2x"></i></a></li>
        <li><a href="https://www.linkedin.com target="_blank rel="nooperner noreferrer" className="linkedin">
          <i class="fab fa-linkedin fa-2x"></i></a></li>
        <li><a href="https://www.google.com target="_blank rel="nooperner noreferrer" className="google">
          <i class="fab fa-google fa-2x"></i></a></li>
      </ul>
    </div>
  </div>
)


export default Footer