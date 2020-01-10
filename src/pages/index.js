import React from "react"
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import Layout from "../components/layout"
import BackgroundImage from 'gatsby-background-image'
import "./bulma.scss"

const IndexPage = ({className}) => (
  <Layout>

<section class="hero is-dark is-fullheight-with-navbar">
<StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "tensure_LinkedIn_cover_1-01.png" }) {
          childImageSharp {
            fluid(quality: 100) {
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
        >
        </BackgroundImage>
      )
    }}
  />
</section>




  </Layout>
)

const StyledBackgroundSection = styled(IndexPage)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
  min-height: calc(100vh - 3.25rem);
`
export default StyledBackgroundSection