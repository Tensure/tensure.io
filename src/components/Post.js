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
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  card: {
    marginBottom: 15
  },
  media: {
    height: 140
  },
  link: {
    textDecoration: "none",
    marginRight: 0,
    marginLeft: 1,
    color: "black"
  },
  list: {
    listStyleType: "none",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around"
  }
});

const Post = ({ title, author, slug, date, body, fluid }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <Link to={`/blog/${slug}`}>
          <Img fluid={fluid} />
        </Link>
        <CardContent>
          <Typography gutterBottom variant='h6' component='h2'>
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
        <Grid container spacing={2}>
          <Grid item xs={8}>

          </Grid>
          <Grid item xs={4}>
            <Link className={classes.link} to={`/blog/${slug}`}>
              <Button size='small' variant='outlined' color='primary' right>
                Read More
              </Button>
            </Link>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default Post;
