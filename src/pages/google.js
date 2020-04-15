import React from "react"
import 'normalize.css'
import styles from '../styles/google.module.scss'
import SEO from "../components/seo"
import Grid from "@material-ui/core/Grid"
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import { Link } from "gatsby"
import googleLogo from "../images/logo-google-sm.svg"
import tensureLogo from "../images/logo-tensure-sm.svg"

const GooglePage = () => {
  return (
    <Grid container>
      <SEO title='Hello Google'></SEO>
      <Grid id={styles.section1} container justify="center" spacing={0}>
        <Grid className={styles.section1Container} item xs={12}>
          <h1>HEY, GOOGLE.<br />
          THERE’S NOTHING NEW HERE.</h1>
          <p>(WELL, EXCEPT FOR US.)</p>
        </Grid>
      </Grid>

      <Grid id={styles.section2} container justify="center" spacing={0}>
        <Grid className={styles.section2Container} item xs={12} md={8} lg={7}>
          <h2>Hi We're Tensure.</h2>
          <p>We know you hear the same spiel from everyone, so we're going to chime in real quick and say that we do all of the stuff, too. And, by 'the stuff' we mean:</p>
          <ul>
            <li>- VM Migration to GCP</li>
            <li>- Kubernetes</li>
            <li>- Anthos</li>
            <li>- like, all of the other cloud things & stuff</li>
          </ul>
          <p className={styles.smallText}>Seriously, though. Here’s some proof that we do:</p>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={6}>
              <Link to="#">
                <div className={styles.caseStudy1}>
                  <p>Case Study Placeholder</p>
                </div>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Link to="#">
                <div className={styles.caseStudy2}>
                  <p>Case Study Placeholder</p>
                </div>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid id={styles.section3} container justify="center" spacing={0}>
        <Grid className={styles.section3Container} item xs={12} md={8} md={7}>
          <h2>You're in Sales, Right?</h2>
          <p>We see you and know that your clients' success determines your success. We don't take that lightly. In fact, we do what we do so they can do what they do and to help you keep doing what you do…and we want everyone to do it well.</p>
          <p>Yes, we're a young company, but we're not inexperienced. As a small team of 16, we've got two GCP certified architects (not to brag, but that's, like, 12.5%) and working toward adding more. We're in this for the long haul and anxious to bring a lot of value to some amazing clients.</p>

          <GridList cellHeight={76} cols={8}>
            <GridListTile>
              <div className={styles.logoContainer}>
                <img src={googleLogo} alt="Google Logo" />
              </div>
            </GridListTile>
            <GridListTile>
              <div className={styles.logoContainer}>
                <img src={googleLogo} alt="Google Logo" />
              </div>
            </GridListTile>
            <GridListTile>
              <div className={styles.logoContainer}>
                <img src={tensureLogo} alt="Tensure Logo" />
              </div>
            </GridListTile>
            <GridListTile>
              <div className={styles.logoContainer}>
                <img src={tensureLogo} alt="Tensure Logo" />
              </div>
            </GridListTile>
            <GridListTile>
              <div className={styles.logoContainer}>
                <img src={tensureLogo} alt="Tensure Logo" />
              </div>
            </GridListTile>
            <GridListTile>
              <div className={styles.logoContainer}>
                <img src={tensureLogo} alt="Tensure Logo" />
              </div>
            </GridListTile>
            <GridListTile>
              <div className={styles.logoContainer}>
                <img src={tensureLogo} alt="Tensure Logo" />
              </div>
            </GridListTile>
            <GridListTile>
              <div className={styles.logoContainer}>
                <img src={tensureLogo} alt="Tensure Logo" />
              </div>
            </GridListTile>
            <GridListTile>
              <div className={styles.logoContainer}>
                <img src={tensureLogo} alt="Tensure Logo" />
              </div>
            </GridListTile>
            <GridListTile>
              <div className={styles.logoContainer}>
                <img src={tensureLogo} alt="Tensure Logo" />
              </div>
            </GridListTile>
            <GridListTile>
              <div className={styles.logoContainer}>
                <img src={tensureLogo} alt="Tensure Logo" />
              </div>
            </GridListTile>
            <GridListTile>
              <div className={styles.logoContainer}>
                <img src={tensureLogo} alt="Tensure Logo" />
              </div>
            </GridListTile>
            <GridListTile>
              <div className={styles.logoContainer}>
                <img src={tensureLogo} alt="Tensure Logo" />
              </div>
            </GridListTile>
            <GridListTile>
              <div className={styles.logoContainer}>
                <img src={tensureLogo} alt="Tensure Logo" />
              </div>
            </GridListTile>
            <GridListTile>
              <div className={styles.logoContainer}>
                <img src={tensureLogo} alt="Tensure Logo" />
              </div>
            </GridListTile>
            <GridListTile>
              <div className={styles.logoContainer}>
                <img src={tensureLogo} alt="Tensure Logo" />
              </div>
            </GridListTile>
          </GridList>
        </Grid>
      </Grid>

      <Grid id={styles.section4} container justify="center" spacing={0}>
        <Grid className={styles.section4Container} item xs={12} md={7}>
          <h2>WE’RE READY TALK. HOW ABOUT YOU?</h2>
          <a href="#" className={styles.callBtn}>LET’S SCHEDULE A CALL OVER LUNCH</a>
          <p className={styles.smallText}>(…and it’s totally on us)</p>
        </Grid>
      </Grid>

      <Grid id={styles.footer} container justify="center" spacing={0}>
        <Grid className={styles.footerContainer} item xs={12}>
          <Link to="/">Tensure</Link>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default GooglePage;
