import React from 'react'
import { CardTitle, CardBody, CardText, Form, FormGroup, Input } from 'reactstrap'
import { Card,
  CardContent,
  FormControl,
  TextField,
  Typography,
  CardActionArea } from '@material-ui/core'
import {graphql, StaticQuery} from 'gatsby';
import Img from 'gatsby-image'
import { Link } from "gatsby";
import sidebarStyles from './sidebar.module.scss'
const Sidebar = ({authorImageFluid, postAuthor}) => (
  <div>
    {postAuthor && (
      <Card className={sidebarStyles.card}>
        <Img className="card-image-top" fluid={authorImageFluid} />
        <CardContent>
          <Typography className="text-center text-uppercase mb-2">{postAuthor.name}</Typography>
          <Typography className="text-center mb-2">{postAuthor.bio}</Typography>
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
        </CardContent>
      </Card>
    )}
    <Card className={sidebarStyles.card}>
      <CardContent>
        <Typography className="text-center text-uppercase mb-3">
          Newsletter
        </Typography>
        <form className="text-center">
          <FormControl>
            <TextField
            type="email"
            name="name"
            placeholder="Your email address.."></TextField>
          </FormControl>
          <button className="btn btn-outline-success text-uppercase">
            Subscribe
          </button>
        </form>
      </CardContent>
    </Card>
    <Card className={sidebarStyles.card}>
      <CardContent>
        <Typography className="text-center text-uppercase">
          Advertisement
        </Typography>
        <img src="https://via.placeholder.com/320x200" alt="Advert" style={{width: "100%"}} />
      </CardContent>
    </Card>
    <Card className={sidebarStyles.card}>
      <CardContent>
        <Typography className="text-center text-uppercase mb-3">
          Recent Posts
        </Typography>
        <StaticQuery query={sidebarQuery} render={(data) => (
          <div>
            {data.allMarkdownRemark.edges.map(({node}) => (
              <Card className={sidebarStyles.card}
              key={node.id}>
                <Link to={`/blog/${node.fields.slug}`}>
                  <Img className="card-image-top" fluid={node.frontmatter.image.childImageSharp.fluid}></Img>
                </Link>
                <CardContent>
                  <Typography>
                    <Link to={`/blog/${node.fields.slug}`}>
                      {node.frontmatter.title}
                    </Link>
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        )}/>
      </CardContent>
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