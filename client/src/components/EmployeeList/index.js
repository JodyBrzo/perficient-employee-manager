import React from "react";
import { Link } from "react-router-dom";

function EmployeeList(props) {
  return (
    <div className="container">
      <ul className="list-unstyled text-center justify-content-center">
        {console.log("Hello from Employee List")}
        {console.log("Showing Props",props)}
        {console.log(props.employees.length)}
        
        {props.employees.map(employee => (
          <li key={employee.id} >
            <Link to={"/employee/" + employee.id}>
              <strong>
                {employee.firstName + " " + employee.lastName} - {employee.role}
              </strong>
            </Link>
          </li>
        ))};

      </ul>
    </div>
  );
}

export default EmployeeList;
