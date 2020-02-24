import React from "react";
import Img from "gatsby-image";
import Layout from "../components/layout";
import SidebarNav from "../components/SidebarNav";
import Sidebar from "../components/Sidebar";
import { graphql, Link } from "gatsby";
import SEO from "../components/seo";
import { Badge, Card, CardBody, CardSubtitle, Row, Col } from "reactstrap";
import { slugify } from "../util/utilityFunctions";
import authors from "../util/authors";

const SinglePost = ({ data, pageContext }) => {
  const post = data.markdownRemark.frontmatter;
  const author = authors.find(x => x.name === post.author);

  const baseUrl = "http://gatsbytutorial.co.uk/";

  return (
    <>
      <div>Under Construction</div>
    </>
    // <Layout pageTitle={post.title}>
    //   <div className='container'>
    //     <SEO title={post.title} />
    //     <Row>
    //       <Col md='3'>
    //         <SidebarNav />
    //       </Col>
    //       <Col md='6'>
    //         <Card>
    //           <Img
    //             className='card-image-top'
    //             fluid={post.image.childImageSharp.fluid}
    //           />
    //           <CardBody>
    //             <CardSubtitle>
    //               <span className='text-info'>{post.date}</span> by{" "}
    //               <span className='text-info'>{post.author}</span>
    //             </CardSubtitle>
    //             <div
    //               dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
    //             />
    //             <ul className='post-tags'>
    //               {post.tags.map(tag => (
    //                 <li key={tag}>
    //                   <Link to={`/tag/${slugify(tag)}`}>
    //                     <Badge color='primary'>{tag}</Badge>
    //                   </Link>
    //                 </li>
    //               ))}
    //             </ul>
    //           </CardBody>
    //         </Card>
    //         <h1>Share this post</h1>
    //         <ul>
    //           <li>
    //             <a
    //               href={
    //                 "https://www.facebook.com/sharer/sharer.php?u=" +
    //                 baseUrl +
    //                 pageContext.slug
    //               }
    //               className='facebook'
    //               target='_blank'
    //               rel='noopener noreferrer'
    //             >
    //               <i className='fab fa-facebook-f fa-2x'></i>
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               href={
    //                 `https://www.twitter.com/share?url=${baseUrl}${pageContext.slug}&text=${post.title}&viatwitterHandle`
    //               }
    //               className='twitter'
    //               target='_blank'
    //               rel='noopener noreferrer'
    //             >
    //               <i className='fab fa-twitter fa-2x'></i>
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               href={
    //                 "https://plus.google.com/share?url=" + baseUrl + pageContext.slug
    //               }
    //               className='google'
    //               target='_blank'
    //               rel='noopener noreferrer'
    //             >
    //               <i className='fab fa-google fa-2x'></i>
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               href={
    //                 "https://www.linkedin.com/shareArticle?url=" + baseUrl + pageContext.slug
    //               }
    //               className='linkedin'
    //               target='_blank'
    //               rel='noopener noreferrer'
    //             >
    //               <i className='fab fa-linkedin fa-2x'></i>
    //             </a>
    //           </li>
    //         </ul>
    //       </Col>
    //       <Col md='3'>
    //         <Sidebar
    //           postAuthor={author}
    //           authorImageFluid={data.file.childImageSharp.fluid}
    //         />
    //       </Col>
    //     </Row>
    //   </div>
    // </Layout>
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
export default SinglePost;
