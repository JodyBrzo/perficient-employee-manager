import React, {useState, useEffect} from "react";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import EmployeeList from "../components/EmployeeList";


const Employees = () => {

  const [employeesState, setEmployees] = useState([])

  useEffect(() =>{
    loadEmployees()
  }, [])

  function loadEmployees() {
    API.findAllEmployees() 
      .then(res => {
        setEmployees(res.data);
      })
      .catch(err => console.error(err))
    };

  return (
    <Container >
          <Row>
            <Col size="md-12" className="text-center" >
              <Jumbotron>
                  <h1>Perficient Employees</h1>
              </Jumbotron>
              <EmployeeList employees={employeesState}/>
            </Col>
          </Row>
    </Container>
  );
};

export default Employees;
