import React, { useCallback } from "react";
import { useStaticQuery, graphql } from "gatsby"
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import styles from './testimonials.module.scss'
import style from './testimonials.scss'
import Slider from "react-slick";
import Img from "gatsby-image"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DATA = [
              {
              name: "Tony Chou",
              title: "Developer Apprentice",
              description: "Tensure Apprenticeship program allowed me to become a full time web developer in 6 months while I was working full time as a licensed occupational therapist. The program offered me a desired career change and an amazing life experience. Doug, one of Tensure co-founders, has been a great friend and mentor who guided me through every single step in a field I had absolutely no prior experience. Now I continue to improve my skills through the help of the Tensure Team!",
              image: "",
              },
              {
                name: "Deeter Cessler",
                title: "Developer",
                description: "If you want to work on great products, learn from brilliant and helpful coworkers, and have the flexibility of a 100% remote job, then this is the job you want. I love being able to work with big-name clients while still keeping all the advantages of a small company.",
                image: "",
              },
              {
                name: "Ellayn Chenoweth",
                title: "Developer Apprentice",
                description: "I cannot speak highly enough about Tensure’s Apprenticeship Program. I formerly was a full time nanny, with zero experience in web development, and this has given me the ability to completely expand who I am as a person and in the professional realm. I am currently in the second phase of the program and it has far exceeded my expectations. Coming in and beginning to work with highly skilled experienced engineers was beyond intimidating. After starting, all of that went away. They have done nothing but further my knowledge and cheer me on.",
                image: "",
              },
              {
                name: "Tony Chou",
                title: "Developer Apprentice",
                description: "Tensure Apprenticeship program allowed me to become a full time web developer in 6 months while I was working full time as a licensed occupational therapist. The program offered me a desired career change and an amazing life experience. Doug, one of Tensure co-founders, has been a great friend and mentor who guided me through every single step in a field I had absolutely no prior experience. Now I continue to improve my skills through the help of the Tensure Team!",
                image: "",
              },
              {
                name: "Deeter Cessler",
                title: "Developer",
                description: "If you want to work on great products, learn from brilliant and helpful coworkers, and have the flexibility of a 100% remote job, then this is the job you want. I love being able to work with big-name clients while still keeping all the advantages of a small company.",
                image: "",
              },
              {
                name: "Ellayn Chenoweth",
                title: "Developer Apprentice",
                description: "I cannot speak highly enough about Tensure’s Apprenticeship Program. I formerly was a full time nanny, with zero experience in web development, and this has given me the ability to completely expand who I am as a person and in the professional realm. I am currently in the second phase of the program and it has far exceeded my expectations. Coming in and beginning to work with highly skilled experienced engineers was beyond intimidating. After starting, all of that went away. They have done nothing but further my knowledge and cheer me on.",
                image: "",
              },
            ]

const Testimonals = () => {

  const img = useStaticQuery(graphql`
  query {
    imageSharp(id: {eq: "5c594607-a443-583c-bb2f-1ceb19075788"}) {
      id
      fixed(width: 263, height: 263) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`)

console.log(img)

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 3,
    speed: 1500,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section className={styles.testimonals}>
      <Container maxWidth={'maxWidthLg'} disableGutters="true">
        <div>
          <Slider {...settings}>
            {DATA.map(data => {
              return (
                  <div className={styles.cardWrap + " cardWrap"}>
                    <div className={styles.card + " card"}>
                      <p className={styles.body + " body"}>{data.description}</p>
                      <div className={styles.person + " person"}>
                        <h4 className={styles.name + " name"}><span>{data.name}</span><br />{data.title}</h4>
                        <div className="img-wrap">
                          <Img className={styles.profilePic + " profilePic"} fixed={img.imageSharp.fixed} />
                          {/* <img className={styles.profilePic + " profilePic"} src="https://pbs.twimg.com/profile_images/1055263632861343745/vIqzOHXj.jpg" alt="name" /> */}
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
