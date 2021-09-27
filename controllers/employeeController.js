const db = require("../models");
const uuid = require("uuid");

module.exports = {

  //Get all Perficient employees.
  findAllEmployees: function(req, res){
    db.Employee
      .find({})
      .then(dbModel =>{
        console.log (dbModel);
        res.setHeader("Description", "Retrieved all Perficient employees.");
        res.setHeader("X-Total-Count", dbModel.length);
        res.status(200).json(dbModel);
      })
      .catch(err => {
        res.status(422).json(err);
      });
  },

  //Create a Perficient employee.
  createEmployee: function(req, res){
    req.body.id = uuid.v4();
    req.body.skills.forEach(skill =>{
      skill.id = uuid.v4();
      skill.field.id = uuid.v4();
    })
    db.Employee
    .create(req.body)
    .then(dbModel => res.status(201).json(dbModel))
    .catch(err => {
      console.log (err);
      res.status(422).json({status:"Invalid Perficient employee data sent to server."});
    });
},

  //Find a Perficient employee by ID.
  findEmployeeById: function(req, res){
    if (req.params.employeeId === undefined ||
      !uuid.validate(req.params.employeeId)){
        res.status(400).json({status:"Invalid ID format"});
    }

    db.Employee
    .findOne({id: req.params.employeeId})
    .then(dbModel => {
      if (dbModel === null){
        res.status(404).json({status:"Perficient employee not found."});
      }
      res.status(200).json(dbModel);
      })
    .catch(err => res.status(422).json(err));
  },

  //Update a Perficient employee by ID.
  updateEmployeeById: function(req, res){
    if (req.params.employeeId === undefined ||
      !uuid.validate(req.params.employeeId)){
        res.status(400).json({status:"Invalid ID format"});
    }
    
    db.Employee
    .findOneAndUpdate({id: req.params.employeeId}, req.body)
    .then(dbModel => {
      if (dbModel === null){
        res.status(404).json({status:"Perficient employee not found."});
      }
      res.status(200).json(dbModel);
      })
    .catch(err => res.status(422).json({status: "Invalid Perficient employee data sent to server."}));
  },

  //Delete a Perficient employee by ID.
  removeEmployeeById: function(req, res){
    if (req.params.employeeId === undefined ||
      !uuid.validate(req.params.employeeId)){
        res.status(400).json({status:"Invalid ID format"});
    }

    db.Employee
      .findOneAndDelete({id: req.params.employeeId}, req.body)
      .then(dbModel => {
        if (dbModel === null){
          res.status(404).json({status:"Perficient employee not found."});
        }
        res.status(204).json({status: "Deleted a Perficient employee."})
        })
      .catch(err => res.status(422).json(err));
  },

  //Get all technical skills from a Perficient employee.
  findAllSkillsByEmployee: function(req, res){
    if (req.params.employeeId === undefined ||
      !uuid.validate(req.params.employeeId)){
        res.status(400).json({status:"Invalid ID format"});
    }

    db.Employee
    .findOne({id: req.params.employeeId})
    .then(dbModel => {
      if (dbModel === null){
        res.status(404).json({status:"Perficient employee not found."});
      }
      res.setHeader("X-Total-Count", dbModel.skills.length);
      res.status(200).json(dbModel.skills);
      })
    .catch(err => res.status(422).json(err));
  },

  //Add a technical skill to a Perficient employee.
  addSkillToEmployee: function(req, res){
    if (req.params.employeeId === undefined ||
      !uuid.validate(req.params.employeeId)){
        res.status(400).json({status:"Invalid ID format"});
    }
    
    req.body.id = uuid.v4();
    req.body.field.id = uuid.v4();
    db.Employee
    .findOneAndUpdate({id: req.params.employeeId}, {$push: {"skills": req.body}}, {new: true})
    .then(dbModel => {
      if (dbModel === null){
        res.status(404).json({status:"Perficient employee not found."});
      }
      res.status(201).json(dbModel.skills.slice(-1));
      })
    .catch(err => res.status(422).json({status: "Invalid technical skill data sent to server."}));
  },

  //Find a technical skill, from a Perficient employee, by ID.
  findSkillFromEmployeeById: function(req, res){
    if (req.params.employeeId === undefined ||
        req.params.skillId === undefined ||
        !uuid.validate(req.params.employeeId) ||
        !uuid.validate(req.params.skillId)){
        res.status(400).json({status:"Invalid ID format"});
    }

    db.Employee
    .findOne({id: req.params.employeeId, "skills.id": req.params.skillId})
    .then(dbModel => {
      if (dbModel === null){
        res.status(404).json({status:"Technical skill or Perficient employee not found."});
      }
      res.status(200).json(dbModel);
      })
    .catch(err => {
      console.log (err);
      res.status(422).json(err);
    });
  },

  //Update a technical skill, from a Perficient employee, by ID.
  updateSkillFromEmployeeById: function(req, res){
    if (req.params.employeeId === undefined ||
      req.params.skillId === undefined ||
      !uuid.validate(req.params.employeeId) ||
      !uuid.validate(req.params.skillId)){
      res.status(400).json({status:"Invalid ID format"});
  }
    
    db.Employee
    .findOneAndUpdate({id: req.params.employeeId, "skills.id": req.params.skillId}, {$set: {"skills.$": req.body}}, {new: true})
    .then(dbModel => {
      if (dbModel === null){
        res.status(404).json({status:"Technical skill or Perficient employee not found."});
      }
      const skill = dbModel.skills.find(skill => skill.id === req.params.skillId);
      res.setHeader("Description", "Updated a technical skill, from a Perficient employee, by ID.");
      res.status(200).json(skill);
      })
    .catch(err => {
      console.log(err);
      res.status(422).json({status: "Invalid Perficient employee data sent to server."});
    });
  },

  //Delete a technical skill, from a Perficient employee, by ID.
  removeSkillFromEmployeeById: function(req, res){
    if (req.params.employeeId === undefined ||
      req.params.skillId === undefined ||
      !uuid.validate(req.params.employeeId) ||
      !uuid.validate(req.params.skillId)){
      res.status(400).json({status:"Invalid ID format"});
  }
    
    db.Employee
    .findOneAndUpdate({id: req.params.employeeId}, {$pull: {"skills": {"id": req.params.skillId}}})
    .then(dbModel => {
      if (dbModel === null){
        res.status(404).json({status:"Technical skill or Perficient employee not found."});
      }
      res.status(204).setHeader("Description", "Deleted a technical skill, from a Perficient employee, by ID.");
      })
    .catch(err => res.status(422).json({status: "Invalid Perficient employee data sent to server."}));
  },
}