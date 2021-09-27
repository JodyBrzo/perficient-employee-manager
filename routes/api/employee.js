const router = require ("express").Router();
const employeeController  = require("../../controllers/employeeController");

router.route("/")
.get(employeeController.findAllEmployees)  //Get all Perficient employees.
.post(employeeController.createEmployee);  //Create a Perficient employee.

router.route("/:employeeId")
.get(employeeController.findEmployeeById)  //Find a Perficient employee by ID.
.put(employeeController.updateEmployeeById)  //Update a Perficient employee by ID.
.delete(employeeController.removeEmployeeById);  //Delete a Perficient employee by ID.

router.route("/:employeeId/skills")
.get(employeeController.findAllSkillsByEmployee)  //Get all technical skills from a Perficient employee.
.post(employeeController.addSkillToEmployee);  //Add a technical skill to a Perficient employee.

router.route("/:employeeId/skills/:skillId")
.get(employeeController.findSkillFromEmployeeById)  //Find a technical skill, from a Perficient employee, by ID.
.put(employeeController.updateSkillFromEmployeeById)  //Update a technical skill, from a Perficient employee, by ID.
.delete(employeeController.removeSkillFromEmployeeById);  //Delete a technical skill, from a Perficient employee, by ID.

module.exports = router;