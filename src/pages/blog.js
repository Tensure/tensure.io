import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql, StaticQuery } from "gatsby";
import Post from "../components/Post";
import { Row, Col } from "reactstrap";
import Sidebar from "../components/sidebar";
import PaginationLinks from "../components/PaginationLinks";
import SidebarNav from "../components/sidebarnav"

const BlogPage = () => {
  const postsPerPage = 3;
  let numberOfPages;
  return (
    <Layout pageTitle='TensureBlog'>
      <SEO title='Blog'></SEO>
      <div className='container'>
        <Row>
          <Col md='3'>
            <SidebarNav></SidebarNav>
          </Col>
          <Col md='6'>
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
          </Col>
          <Col md='3'>
            <Sidebar />
          </Col>
        </Row>
      </div>
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
