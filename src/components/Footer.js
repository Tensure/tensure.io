import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import footerStyles from './footer.module.scss'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return ( 
  <div className={footerStyles.footer}>
    <h4 className={footerStyles.content}>
    {data.site.siteMetadata.author}, © {new Date().getFullYear()}
    </h4>
    <p className={footerStyles.follow}>Follow us on social media</p>
    <div className={footerStyles.footersociallinks}>
      <ul className={footerStyles.footerlinkslist}>
        <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="facebook">
          <i className="fab fa-facebook-f fa-2x"></i></a></li>
        <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="twitter">
          <i className="fab fa-twitter fa-2x"></i></a></li>
        <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="instagram">
          <i className="fab fa-instagram fa-2x"></i></a></li>
        <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="linkedin">
          <i className="fab fa-linkedin fa-2x"></i></a></li>
        <li><a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="github">
          <i className="fab fa-github fa-2x"></i></a></li>
      </ul>
    </div>
  </div>
)
  }


export default Footer