import React from 'react'
import { Card, CardTitle, CardBody, CardText, Form, FormGroup, Input } from 'reactstrap'
import {graphql, StaticQuery} from 'gatsby';
import Img from 'gatsby-image'
import { Link } from "gatsby";

const Sidebar = ({authorImageFluid, postAuthor}) => (
  <div>
    {postAuthor && (
      <Card>
        <Img className="card-image-top" fluid={authorImageFluid} />
        <CardBody>
          <CardTitle className="text-center text-uppercase mb-2">{postAuthor.name}</CardTitle>
          <CardText className="text-center mb-2">{postAuthor.bio}</CardText>
          <div className="author-social-links text-center">
            <ul>
              <li><a href={postAuthor.facebook} target="_blank" rel="noopener noreferrer" className="facebook">
              <i className="fab fa-facebook-f fa-lg"></i></a></li>
              <li><a href={postAuthor.twitter} target="_blank" rel="noopener noreferrer" className="twitter">
              <i className="fab fa-twitter fa-lg"></i></a></li>
              <li><a href={postAuthor.github} target="_blank" rel="noopener noreferrer" className="github">
              <i className="fab fa-github fa-lg"></i></a></li>
              <li><a href={postAuthor.instagram} target="_blank" rel="noopener noreferrer" className="instagram">
              <i className="fab fa-instagram fa-lg"></i></a></li>
              <li><a href={postAuthor.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin">
              <i className="fab fa-linkedin fa-lg"></i></a></li>
            </ul>
          </div>
        </CardBody>
      </Card>
    )}
    <Card>
      <CardBody>
        <CardTitle className="text-center text-uppercase mb-3">
          Newsletter
        </CardTitle>
        <Form className="text-center">
          <FormGroup>
            <Input
            type="email"
            name="name"
            placeholder="Your email address.."></Input>
          </FormGroup>
          <button className="btn btn-outline-success text-uppercase">
            Subscribe
          </button>
        </Form>
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        <CardTitle className="text-center text-uppercase">
          Advertisement
        </CardTitle>
        <img src="https://via.placeholder.com/320x200" alt="Advert" style={{width: "100%"}} />
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        <CardTitle className="text-center text-uppercase mb-3">
          Recent Posts
        </CardTitle>
        <StaticQuery query={sidebarQuery} render={(data) => (
          <div>
            {data.allMarkdownRemark.edges.map(({node}) => (
              <Card key={node.id}>
                <Link to={node.fields.slug}>
                  <Img className="card-image-top" fluid={node.frontmatter.image.childImageSharp.fluid}></Img>
                </Link>
                <CardBody>
                  <CardTitle>
                    <Link to={node.fields.slug}>
                      {node.frontmatter.title}
                    </Link>
                  </CardTitle>
                </CardBody>
              </Card>
            ))}
          </div>
        )}/>
      </CardBody>
    </Card>
  </div>
)

const sidebarQuery = graphql`
  query sidebarQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC}
      limit: 3
    ) {
      edges{
        node{
          id
          frontmatter{
            title
            image{
              childImageSharp{
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields{
            slug
          }
        }
      }
    }
  }
`
export default Sidebar