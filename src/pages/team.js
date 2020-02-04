import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import authors from "../util/authors";
import {
  Col,
  Card,
  CardBody,
  CardTitle,
  Button,
  Row
} from "reactstrap";
import TonyImage from "../images/tony.png";
import DougImage from "../images/doug.png";
import { slugify } from "../util/utilityFunctions";
import Sidebar from "../components/Sidebar";

const TeamPage = () => {
  
  return (
  <Layout pageTitle='Our Team'>
    <SEO title='About' keywords={["gatsby", "application", "react"]} />
    <div className='container'>
      <Row>
        <Col md='8'>
          <Row className='mb-4'>
            <div className='col-md-3'>
              <img
                src={DougImage}
                style={{ maxWidth: "100%", borderRadius: "100%" }}
                alt='John profile'
              />
            </div>
            <div className='col-md-8'>
              <Card style={{ minHeight: "100%" }}>
                <CardBody>
                  <CardTitle>{authors[0].name}</CardTitle>
                  <CardTitle>{authors[0].bio}</CardTitle>
                  <Button
                    className='text-uppercase'
                    color='primary'
                    href={`/author/${slugify(authors[0].name)}`}
                  >
                    View posts
                  </Button>
                </CardBody>
              </Card>
            </div>
          </Row>
          <Row className='mb-4'>
            <div className='col-md-3'>
              <img
                src={TonyImage}
                style={{ maxWidth: "100%", borderRadius: "100%" }}
                alt='John profile'
              />
            </div>
            <div className='col-md-8'>
              <Card style={{ minHeight: "100%" }}>
                <CardBody>
                  <CardTitle>{authors[2].name}</CardTitle>
                  <CardTitle>{authors[2].bio}</CardTitle>
                  <Button
                    className='text-uppercase'
                    color='primary'
                    href={`/author/${slugify(authors[1].name)}`}
                  >
                    View posts
                  </Button>
                </CardBody>
              </Card>
            </div>
          </Row>
        </Col>
        <Col md='4'>
          <Sidebar />
        </Col>
      </Row>
    </div>
  </Layout> 
  );
};

export default TeamPage;
