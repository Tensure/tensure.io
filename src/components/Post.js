import React from "react";
import { Link } from "gatsby";
import { slugify } from "../util/utilityFunctions";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import Img from "gatsby-image";
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles({
  root: {
    flexrow: 1
  },
  card: {
    marginBottom: 15
  },
  media: {
    height: 140
  },
  link: {
    textDecoration: "none"
  },
  list: {
    listStyleType: "none"
  }
});

const Post = ({ title, author, slug, date, body, fluid, tags }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <Link to={`/blog/${slug}`}>
          <Img fluid={fluid} />
        </Link>
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            <Link className={classes.link} to={`/blog/${slug}`}>
              {title}
            </Link>
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            <span>{date}</span> by <span>{author}</span>
            {body}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <ul className={classes.list}>
          {tags.map(tag => (
            <li key={tag}>
              <Link className={classes.link} to={`/tag/${slugify(tag)}`}>
                <Chip label={tag} color="primary"/>
              </Link>
            </li>
          ))}
        </ul>
        <Link className={classes.link} to={`/blog/${slug}`}>
          <Button size='small' variant='outlined' color='primary'>
            Read More
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default Post;
