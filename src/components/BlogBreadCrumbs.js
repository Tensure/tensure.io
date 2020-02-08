import React from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import LabelIcon from "@material-ui/icons/Label"
import PeopleIcon from "@material-ui/icons/People"
import PermMediaIcon from "@material-ui/icons/PermMedia"
import styles from './blogBreadCrumbs.module.scss'

// function handleClick(event) {
//   event.preventDefault();
//   console.info("You clicked a breadcrumb.");
// }

const BlogBreadcrumbs = () => {

  return (
    <Breadcrumbs maxItems={3} aria-label='breadcrumb'>
      <Link
        color='inherit'
        href='/blog'
        className={styles.link}
      >
        <HomeIcon className={styles.icon} />
        Blog
      </Link>
      <Link
        color='inherit'
        href='/blog'
        className={styles.link}
      >
        <PeopleIcon className={styles.icon} />
        Apprentices
      </Link>
      <Link
        color='inherit'
        href='/blog'
        className={styles.link}
      >
        <PermMediaIcon className={styles.icon} />
        Videos
      </Link>
      <Link
        color='inherit'
        href='/getting-started/installation/'
        className={styles.link}
      >
        <WhatshotIcon className={styles.icon} />
        Core
      </Link>
      <Link color='inherit' href='/tags'>
        <LabelIcon className={styles.icon} />
        Tags
      </Link>
    </Breadcrumbs>
  );
}

export default BlogBreadcrumbs
