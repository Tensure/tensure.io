import React from "react";
import {
  Button,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import GithubIcon from "@material-ui/icons/Github";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";
import { Link } from "gatsby";
import styles from "./sidebar.module.scss";

const Sidebar = ({ authorImageFluid, postAuthor }) => (
  <div>
    {postAuthor && (
      <Card className={styles.card}>
        <Img className='card-image-top' fluid={authorImageFluid} />
        <CardContent>
          <Typography variant='h6'>{postAuthor.name}</Typography>
          <Typography variant='body1'>{postAuthor.bio}</Typography>
          <div className={styles.social}>
            <ul className={styles.list}>
              <li>
                <a
                  href={postAuthor.facebook}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='facebook'
                >
                  <FacebookIcon fontSize='small' color='primary' />
                </a>
              </li>
              <li>
                <a
                  href={postAuthor.twitter}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='twitter'
                >
                  <TwitterIcon fontSize='small' color='primary' />
                </a>
              </li>
              <li>
                <a
                  href={postAuthor.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='github'
                >
                  <GithubIcon fontSize='small' color='primary' />
                </a>
              </li>
              <li>
                <a
                  href={postAuthor.instagram}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='instagram'
                >
                  <InstagramIcon fontSize='small' color='primary' />
                </a>
              </li>
              <li>
                <a
                  href={postAuthor.linkedin}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='linkedin'
                >
                  <LinkedInIcon fontSize='small' color='primary' />
                </a>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    )}
    {/* <Card className={styles.card}>
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
    </Card> */}
    <Card className={styles.card}>
      <CardContent>
        <Typography className='text-center text-uppercase'>
          Advertisement
        </Typography>
        <img
          src='https://via.placeholder.com/320x200'
          alt='Advert'
          style={{ width: "100%" }}
        />
      </CardContent>
    </Card>
    <Card className={styles.card}>
      <CardContent>
        <Typography className='text-center text-uppercase mb-3'>
          Recent Posts
        </Typography>
        <StaticQuery
          query={sidebarQuery}
          render={data => (
            <div>
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <Card className={styles.card} key={node.id}>
                  <Link to={`/blog/${node.fields.slug}`}>
                    <Img
                      className='card-image-top'
                      fluid={node.frontmatter.image.childImageSharp.fluid}
                    ></Img>
                  </Link>
                  <CardContent>
                    <Typography>
                      <Link
                        className={styles.link}
                        to={`/blog/${node.fields.slug}`}
                      >
                        <Button color='primary' size='small'>
                          {node.frontmatter.title}
                        </Button>
                      </Link>
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        />
      </CardContent>
    </Card>
  </div>
);

const sidebarQuery = graphql`
  query sidebarQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
export default Sidebar;
