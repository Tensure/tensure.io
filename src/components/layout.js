/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import "../styles/index.scss";
import Header from "./header";
import Footer from "./footer";
import "../styles/bulma.scss";
import layoutStyles from "./layout.module.scss";

const Layout = ({ children, pageTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header siteTitle={data.site.siteMetadata.title} />
        {/* <div
        className='hero is-dark has-bg-img'
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0
        }}
      > */}
        <h1>{pageTitle}</h1>
        {children}
        {/* </div> */}
      </div>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
