const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FieldSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
});

const SkillSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  field: {
    type: FieldSchema,
    required: true,
  },
  experience: {
    type: Number,
    required: true,
    default: 0,
    min: 0,
  },
  summary: {
    type: String,
  }
});

const AddressSchema = new Schema({
  _id: false,
  street: {
    type: String,
    required: true,
  },
  suite: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
  postal: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});

const EmployeeSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  address: {
    type: AddressSchema,
    required: true
  },  
  contactEmail: {
    type: String
  },
  companyEmail: {
    type: String,
    required: true,
  },
  birthDate: {
    type: Date,
    default: Date.now(),
    required: true
  },
  hiredDate: {
    type: Date,
    default: Date.now(),
    required: true
  },
  role: {
    type: String,
    required: true,
  },
  buinessUnit: {
    type: String,
    unique: false
  },
  skills:[
    {
      type: SkillSchema,
    }
  ],
  assignedTo:{
    type: Schema.Types.ObjectId,
    ref: 'Employee'
    },
});

const Employee = mongoose.model("Employee", EmployeeSchema);

module.exports = Employee;
