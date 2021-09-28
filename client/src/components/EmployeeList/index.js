import React from "react";
import { Link } from "react-router-dom";

function EmployeeList({ props }) {
  return (
    <div>
      <ul>
        {props.employees.map(employee => (
          <li>
            <Link to={"/employees/" + employee.id}>
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
