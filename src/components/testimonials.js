import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import Container from '@material-ui/core/Container';
import styles from './testimonials.module.scss'
import './testimonials.scss'
import Slider from "react-slick";
import Img from "gatsby-image"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonals = () => {

  const data = (useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: {order: ASC, fields: fileAbsolutePath},filter: {fileAbsolutePath: {regex: "/(testimonials)/.*.md$/"}}) {
        edges {
          node {
            frontmatter {
              description
              name
              title
              image {
                childImageSharp {
                  fluid(maxWidth: 263) {
                    ...GatsbyImageSharpFluid
                    presentationWidth
                  }
                }
              }
            }
          }
        }
      }
    }
  `)).allMarkdownRemark.edges

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 300,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section className={styles.testimonals}>
      <Container maxWidth={"xl"} disableGutters={true}>
        <div>
          <Slider {...settings}>
            {data.map((data, index) => {

              const person = data.node.frontmatter

              return (
                <div key={index} className={styles.cardWrap + " cardWrap"}>
                  <div className={styles.card + " card"}>
                    <p className={styles.body + " body"}>{person.description}</p>
                    <div className={styles.person + " person"}>
                      <h4 className={styles.name + " name"}><span>{person.name}</span><br />{person.title}</h4>
                      <div className="img-wrap">
                        <Img className={styles.profilePic + " profilePic"} fluid={person.image.childImageSharp.fluid} />
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>
      </Container>
    </section>
  );

};

export default Testimonals;
