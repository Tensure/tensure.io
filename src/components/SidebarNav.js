import React from "react";
import {
  CardTitle,
  CardBody,
  CardText,
  Form,
  FormGroup,
  Input
} from "reactstrap";
import { Card, CardContent, Typography } from '@material-ui/core'
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";
import { Link } from "gatsby";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import sidenavStyles from './sidebarnav.module.scss'

const SidebarNav = () => (
  <div>
    <Card className={sidenavStyles.card}>
      <CardContent>
        <Typography className='text-left text-uppercase mb-0'>
          Navigation
        </Typography>
        <Navbar>
          <nav vertical>
            <NavItem>
              <NavLink href='/videos'>Videos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/'>Apprentices</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/'>Events</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/tags'>Tags</NavLink>
            </NavItem>
          </nav>
        </Navbar>
        <Typography className='text-center mb-2'></Typography>
      </CardContent>
    </Card>
    <Card className={sidenavStyles.card}>
      <CardContent>
        <Typography className='text-center text-uppercase mb-3'>
          ADVERTISEMENT
        </Typography>
      </CardContent>
    </Card>
    <Card className={sidenavStyles.card}>
      <CardContent>
        <Typography className='text-center text-uppercase'>
          TENSURE MERCHANDISE
        </Typography>
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
export default SidebarNav;
