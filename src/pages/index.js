import React from "react"
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import Layout from "../components/layout"
import BackgroundImage from 'gatsby-background-image'
import Image from "../components/image"
import SEO from "../components/seo"
import "./bulma.scss"

const IndexPage = ({className}) => (
  <Layout>

<StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "tensure_LinkedIn_cover_1-01.png" }) {
          childImageSharp {
            fluid(quality: 90) {
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

const StyledBackgroundSection = styled(IndexPage)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`
export default StyledBackgroundSection

// export default IndexPage
