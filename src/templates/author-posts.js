import React from "react";
import Layout from "../components/layout";
import Post from "../components/Post";
import { graphql } from "gatsby";
import authors from "../util/authors";
import Sidebar from "../components/sidebar";
import SidebarNav from "../components/sidebarnav";
import { Row, Col } from "reactstrap";

const authorPosts = ({ data, pageContext }) => {
  const { totalCount } = data.allMarkdownRemark;
  const author = authors.find(x => x.name === pageContext.authorName);
  const pageHeader = `${totalCount} Posts by: ${pageContext.authorName}`;

  return (
    <Layout
      pageTitle={pageHeader}
      postAuthor={author}
      authorImageFluid={data.file.childImageSharp.fluid}
    >
      <div className='container'>
        <Row>
          <Col md='3'>
            <SidebarNav />
          </Col>
          <Col md='6'>
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
          </Col>
          <Col md='3'>
            <Sidebar
            postAuthor={author}
            authorImageFluid={data.file.childImageSharp.fluid}
            ></Sidebar>
          </Col>
        </Row>
      </div>
    </Layout>
  );
};

export const authorQuery = graphql`
  query($authorName: String!, $imageUrl: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { author: { eq: $authorName } } }
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
                fluid(maxWidth: 650) {
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
    file(relativePath: { eq: $imageUrl }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default authorPosts;
