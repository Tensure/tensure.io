import React from "react";
import Img from "gatsby-image";
import Layout from "../components/layout";
import Sidebar from "../components/Sidebar";
import { graphql, Link } from "gatsby";
import SEO from "../components/seo";
import { slugify } from "../util/utilityFunctions";
import authors from "../util/authors";
import singlepostStyles from "./single-post.module.scss";
import {
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Typography
} from "@material-ui/core/";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import BlogBreadCrumbs from "../components/BlogBreadCrumbs";
import withWidth from "@material-ui/core/withWidth";
import Hidden from "@material-ui/core/Hidden";

const SinglePost = ({ data, pageContext }) => {
  const post = data.markdownRemark.frontmatter;
  const author = authors.find(x => x.name === post.author);
  const baseUrl = "www.tensure.io";

  return (
    <Layout pageTitle={post.title}>
      <Container>
        <SEO title={post.title} />
        <Grid container spacing={3}>
          <Grid item xs>
            <BlogBreadCrumbs></BlogBreadCrumbs>
            <Card>
              <Img
                className='card-image-top'
                fluid={post.image.childImageSharp.fluid}
              />
              <CardContent>
                <Typography variant='h6'>
                  <span className='text-info'>{post.date}</span> by{" "}
                  <span className='text-info'>{post.author}</span>
                </Typography>
                <ul className={singlepostStyles.tags}>
                  {post.tags.map(tag => (
                    <li key={tag} className={singlepostStyles.list}>
                      <Link
                        to={`/tag/${slugify(tag)}`}
                        className={singlepostStyles.link}
                      >
                        <Chip clickable label={tag} color='primary' />
                      </Link>
                    </li>
                  ))}
                </ul>
                <div
                  dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
                />
              </CardContent>
              <CardContent>
                <Typography>Share this post</Typography>
                <ul className={singlepostStyles.socialpost}>
                  <li>
                    <a
                      href={
                        "https://www.facebook.com/sharer/sharer.php?u=" +
                        baseUrl +
                        pageContext.slug
                      }
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <FacebookIcon fontSize='large' color='primary' />
                    </a>
                  </li>
                  <li>
                    <a
                      href={`https://www.twitter.com/share?url=${baseUrl}${pageContext.slug}&text=${post.title}&viatwitterHandle`}
                      className='twitter'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <TwitterIcon fontSize='large' color='primary' />
                    </a>
                  </li>
                  {/* <li>
                <a
                  href={
                    "https://plus.google.com/share?url=" +
                    baseUrl +
                    pageContext.slug
                  }
                  className='google'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <GoogleIcon />
                </a>
              </li> */}
                  <li>
                    <a
                      href={
                        "https://www.linkedin.com/shareArticle?url=" +
                        baseUrl +
                        pageContext.slug
                      }
                      className='linkedin'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <LinkedInIcon fontSize='large' color='primary' />
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </Grid>
          <Hidden smDown>
            <Grid item xs={4}>
              <Sidebar
                postAuthor={author}
                authorImageFluid={data.file.childImageSharp.fluid}
              />
            </Grid>
          </Hidden>
        </Grid>
      </Container>
    </Layout>
  );
};

export const postQuery = graphql`
  query blogPostBySlug($slug: String!, $imageUrl: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        author
        date(formatString: "MMM Do YYYY")
        tags
        image {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    file(relativePath: { eq: $imageUrl }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
export default withWidth()(SinglePost);
