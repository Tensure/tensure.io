import React from "react";
import { Link } from "gatsby";
import { Badge, Card, CardTitle, CardText, CardSubtitle, CardBody } from "reactstrap";
import {slugify } from '../util/utilityFunctions'
import Img from "gatsby-image";

const Post = ({ title, author, slug, date, body, fluid, tags}) => {
  return (
    <>
      <div>under construction</div> 
    </>
    // <Card>
    //   <Link to={`/blog/${slug}`}>
    //     <Img className='card-image-top' fluid={fluid} />
    //   </Link>
    //   <CardBody>
    //     <CardTitle>
    //       <Link to={`/blog/${slug}`}>{title}</Link>
    //     </CardTitle>
    //     <CardSubtitle>
    //       <span className='text-info'>{date}</span> by{" "}
    //       <span className='text-info'>{author}</span>
    //     </CardSubtitle>
    //     <CardText>{body}</CardText>
    //       <ul className="post-tags">
    //         {tags.map(tag => (
    //         <li key={tag}>
    //           <Link to={`/tag/${slugify(tag)}`}>
    //             <Badge color="primary" className="text-uppercase">{tag}</Badge>
    //           </Link>
    //         </li>))}
    //       </ul>
    //     <Link to={`/blog/${slug}`} className='btn btn-outline-primary float-right'>
    //       Read more
    //     </Link>
    //   </CardBody>
    // </Card>
  );
};

export default Post;
