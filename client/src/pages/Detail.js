import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import Form from "react-bootstrap/Form";


function Detail(props) {
  const [employeeState, setEmployee] = useState([]);
  const {id} = useParams();
  console.log("id:", id);
  
  useEffect(() =>{
    console.log("id:", id);
    loadEmployee();
  }, [])

  function loadEmployee() {
    API.findEmployeeById(id) 
      .then(res => {
        setEmployee(res.data);
      })
      .catch(err => console.error(err))
    };

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
            {console.log(employeeState)}
            <Form>
              <Form.Group className="mb-3" controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter First Name" defaultValue={employeeState.firstName} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Last Name" defaultValue={employeeState.lastName}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formAddressStreet">
                <Form.Label>Street</Form.Label>
                <Form.Control type="text" placeholder="Enter Street" defaultValue={employeeState.address.street}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formAddressSuite">
                <Form.Label>Suite</Form.Label>
                <Form.Control type="text" placeholder="Enter Suite" defaultValue={employeeState.address.suite} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formAddressCity">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="Enter City" defaultValue={employeeState.address.city} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formAddressRegion">
                <Form.Label>Region</Form.Label>
                <Form.Control type="text" placeholder="Enter Region" defaultValue={employeeState.address.region} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formAddressPostal">
                <Form.Label>Postal Code</Form.Label>
                <Form.Control type="text" placeholder="Enter Postal Code" defaultValue={employeeState.address.postal} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formAddressCountry">
                <Form.Label>Country</Form.Label>
                <Form.Control type="text" placeholder="Enter Country" defaultValue={employeeState.address.country} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formContactEmail">
                <Form.Label>Contact Email</Form.Label>
                <Form.Control type="email" placeholder="Enter Contact Email" defaultValue={employeeState.contactEmail} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formCompanyEmail">
                <Form.Label>Company Email</Form.Label>
                <Form.Control type="email" placeholder="Enter Company Email" defaultValue={employeeState.companyEmail} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBirthDate">
                <Form.Label>Birth Date</Form.Label>
                <Form.Control type="text" placeholder="Enter MM/DD/YYYY" defaultValue={employeeState.birthDate} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formHireDate">
                <Form.Label>Hire Date</Form.Label>
                <Form.Control type="text" placeholder="Enter MM/DD/YYYY" defaultValue={employeeState.hiredDate} />
              </Form.Group>
            </Form>          
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
