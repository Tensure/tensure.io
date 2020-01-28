/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import Header from "./header";
import Footer from "./footer";
import { useStaticQuery, graphql } from "gatsby";
import layoutStyles from "./layout.module.scss";
import "../styles/index.scss";
import "../styles/bulma.scss";

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
        {children}
      </div>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
