import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Badge, Button, Row, Col } from "reactstrap";
import { slugify } from "../util/utilityFunctions";
import Sidebar from "../components/Sidebar";
import SidebarNav from "../components/SidebarNav";
import tagPageStyles from "./tags-page.module.scss";

const TagsPage = ({ pageContext }) => {
  const { tags, tagPostCounts } = pageContext;
  return (
    <Layout pageTitle='All tags'>
      <hr />
      <div className='container'>
        <SEO title='All tags' keywords={["tags", "topics"]}></SEO>
        <Row>
          <Col md='3'>
            <SidebarNav />
          </Col>
          <Col md='6'>
            <ul className={tagPageStyles.tags}>
              {tags.map(tag => (
                <li key={tag} className={tagPageStyles.tag}>
                  <Button color='primary' href={`/tag/${slugify(tag)}`}>
                    {tag} <Badge color='light'>{tagPostCounts[tag]}</Badge>
                  </Button>
                </li>
              ))}
            </ul>
          </Col>
          <Col md='3'>
            <Sidebar></Sidebar>
          </Col>
        </Row>
      </div>
    </Layout>
  );
};

export default TagsPage;
