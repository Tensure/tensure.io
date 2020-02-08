import React from "react";
import Layout from "../components/layout";
import Post from "../components/Post";
import { graphql } from "gatsby";
import { Row, Col } from "reactstrap";
import SidebarNav from "../components/SidebarNav";
import Sidebar from "../components/Sidebar";
import PaginationLinks from "../components/PaginationLinks";
import { Grid, Container } from "@material-ui/core";
const postList = props => {
  const posts = props.data.allMarkdownRemark.edges;
  const { currentPage, numberOfPages } = props.pageContext;

  return (
    <Layout pageTitle={`Page: ${currentPage}`}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <SidebarNav></SidebarNav>
          </Grid>
          <Grid item xs={6}>
            {posts.map(({ node }) => (
              <Post
                key={node.id}
                slug={node.fields.slug}
                title={node.frontmatter.title}
                author={node.frontmatter.author}
                date={node.frontmatter.date}
                body={node.excerpt}
                tags={node.frontmatter.tags}
                fluid={node.frontmatter.image.childImageSharp.fluid}
              />
            ))}
            <PaginationLinks
              currentPage={currentPage}
              numberOfPages={numberOfPages}
            />
          </Grid>
          <Grid item xs={3}>
            <Sidebar></Sidebar>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export const postListQuery = graphql`
  query postListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMM Do YYYY")
            author
            tags
            image {
              childImageSharp {
                fluid(maxWidth: 650, maxHeight: 371) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
export default postList;
