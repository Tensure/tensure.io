import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Badge, Button, Row, Col } from "reactstrap";
import { slugify } from "../util/utilityFunctions";
import Sidebar from "../components/Sidebar";
import styles from "./tags-page.module.scss";
import { Container, Grid } from '@material-ui/core';
import BlogBreadcrumbs from '../components/BlogBreadCrumbs';
import Chip from '@material-ui/core/Chip'
import Link from '@material-ui/core/Link'

const TagsPage = ({ pageContext }) => {
  const { tags, tagPostCounts } = pageContext;
  return (
    <Layout pageTitle='All tags'>
      <SEO title='All tags' keywords={["tags", "topics"]}></SEO>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={6}>
          <BlogBreadcrumbs></BlogBreadcrumbs>
            <ul className={styles.tags}>
              {tags.map(tag => (
                <li key={tag} className={styles.tag}>
                  <Link color='primary' href={`/tag/${slugify(tag)}`}>
                    <Chip clickable label={tag}></Chip>
                    <Chip color='primary' label={tagPostCounts[tag]}></Chip>
                  </Link>
                </li>
              ))}
            </ul>
          </Grid>
          <Grid item xs={6}>
            <Sidebar></Sidebar>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default TagsPage;
