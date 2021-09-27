import axios from "axios";

export default {
  findAllEmployees: function () {
    return axios.get("/api/employees");
  },
  createEmployee: function (employee) {
    return axios.post("/api/employees", employee);
  },
  findEmployeeById: function (employeeId) {
    return axios.get(`/api/employees/${employeeId}`);
  },
  updateEmployeeById: function (employeeId, employee) {
    return axios.put(`/api/employees/${employeeId}`, employee);
  },
  removeEmployeeById: function (employeeId) {
    return axios.delete(`/api/employees/${employeeId}`);
  },
  findAllSkillsByEmployee: function (employeeId) {
    return axios.get(`/api/employees/${employeeId}/skills`);
  },
  addSkillToEmployee: function (employeeId, skill) {
    return axios.post(`/api/employees/${employeeId}/skills`, skill);
  },
  findSkillFromEmployeeById: function (employeeId, skillId) {
    return axios.get(`/api/employees/${employeeId}/skills/${skillId}`);
  },
  updateSkillFromEmployeeById: function (employeeId, skillId, skill) {
    return axios.put(`/api/employees/${employeeId}/skills/${skillId}`, skill);
  },
  removeSkillFromEmployeeById: function (employeeId, skillId) {
    return axios.delete(`/api/employees/${employeeId}/skills/${skillId}`);
  },
}
