import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

function Detail(props) {
  const [] = useState({})

  return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Employee Details</h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">

          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Employees</Link>
          </Col>
        </Row>
      </Container>
    );
  }

export default Detail;
