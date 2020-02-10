import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Post from "../components/Post";
import Sidebar from "../components/Sidebar";
import SidebarNav from "../components/SidebarNav";
import { Container, Grid } from "@material-ui/core/";
import styles from "./tag-posts.module.scss";
import BlogBreadcrumbs from "../components/BlogBreadCrumbs";
import withWidth from "@material-ui/core/withWidth";
import Hidden from "@material-ui/core/Hidden";

const tagPosts = ({ data, pageContext }) => {
  const { tag } = pageContext;
  const { totalCount } = data.allMarkdownRemark;
  const pageHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`;

  return (
    <Layout pageTitle={pageHeader}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs>
            <BlogBreadcrumbs></BlogBreadcrumbs>
            {data.allMarkdownRemark.edges.map(({ node }) => (
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

export const tagQuery = graphql`
  query($tag: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
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

export default withWidth()(tagPosts);
