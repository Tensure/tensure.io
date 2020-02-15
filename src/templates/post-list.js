import React from "react";
import Layout from "../components/layout";
import Post from "../components/Post";
import { graphql } from "gatsby";
import Sidebar from "../components/Sidebar";
import PaginationLinks from "../components/PaginationLinks";
import { Grid, Container } from "@material-ui/core";
import BlogBreadCrumbs from "../components/BlogBreadCrumbs";
import withWidth from "@material-ui/core/withWidth";
import Hidden from "@material-ui/core/Hidden";

const postList = props => {
  const posts = props.data.allMarkdownRemark.edges;
  const { currentPage, numberOfPages } = props.pageContext;

  return (
    <Layout pageTitle={`Page: ${currentPage}`}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs>
            <BlogBreadCrumbs />
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
          <Hidden smDown>
            <Grid item xs={3}>
              <Sidebar></Sidebar>
            </Grid>
          </Hidden>
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
export default withWidth()(postList);
