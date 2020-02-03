import React from "react";
import SEO from "../components/seo";
import { graphql, StaticQuery } from "gatsby";
import Post from "../components/Post";
import Sidebar from "../components/Sidebar";
import PaginationLinks from "../components/PaginationLinks";
import SidebarNav from "../components/SidebarNav"
import Layout from "../components/layout";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const BlogPage = () => {
  const classes = useStyles();
  
  const postsPerPage = 3;
  let numberOfPages;
  return (
    <Layout pageTitle='TensureBlog'>
      <SEO title='Blog'></SEO>
      <Container className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <SidebarNav></SidebarNav>
          </Grid>
          <Grid item xs={6}>
            <StaticQuery
              query={indexQuery}
              render={data => {
                numberOfPages = Math.ceil(
                  data.allMarkdownRemark.totalCount / postsPerPage
                );
                return (
                  <div>
                    {data.allMarkdownRemark.edges.map(({ node }) => (
                      <Post
                        key={node.id}
                        title={node.frontmatter.title}
                        author={node.frontmatter.author}
                        slug={node.fields.slug}
                        date={node.frontmatter.date}
                        body={node.excerpt}
                        covered={node.html}
                        fluid={node.frontmatter.image.childImageSharp.fluid}
                        tags={node.frontmatter.tags}
                      />
                    ))}
                  </div>
                );
              }}
            />
              <PaginationLinks currentPage={1} numberOfPages={numberOfPages} />
          </Grid>
          <Grid item xs={3}>
            <Sidebar />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

const indexQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
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
                fluid(maxHeight: 150) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          html
          excerpt
        }
      }
    }
  }
`;
export default BlogPage;
