import React from "react"
import { graphql, StaticQuery } from 'gatsby'
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"
import BackgroundImage from 'gatsby-background-image'

const IndexPage = ({className}) => (
  <Layout>

<StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "tensure_LinkedIn_cover_1-01.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          <h2>gatsby-background-image</h2>
        </BackgroundImage>
      )
    }}
  />

  </Layout>
)

export default IndexPage
