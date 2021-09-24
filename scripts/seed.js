let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost:27017/perficient", {
  useNewUrlParser: true,
  // useFindAndModify: false,
});

const role = {
  TECHNICAL_CONSULTANT: 'Technical Consultant',
  PROJECT_MANAGER: 'Project Manager',
  DIRECTOR: 'Director',
  CHIEF: 'Chief'
} 

const buinessUnit = {
  DIGITAL_EXPERIENCE_GROUP: 'Digital Experience Group',
  ADOBE: 'Adobe',
  IBM_NBU: 'IBM NBU',
  API_MANAGEMENT: 'API Management'
} 

let chiefSeed = [
  {
    firstName: "Alex",
    lastName: "Jones",
    address: {
      street: "123 Main St",
      suite: "500",
      city: "San Francisco",
      region: "CA",
      postal: "54448",
      country: "US"
    },
    contactEmail: "alexjones@gmail.com",
    companyEmail: "alexjones@perficient.com",
    birthDate: Date.now(),
    hiredDate: Date.now(),
    role: role.CHIEF,
    buinessUnit: buinessUnit.DIGITAL_EXPERIENCE_GROUP,
    skills: [
      {
        field: {
          name:"Corporate Management",
          type: "Software Industry",
        },
        experience: 120,
        summary: "Makes Decisions"
      }
    ],
    assignedTo: null,
  }
];

function superiorSeed (chiefIds){
  let dataSeed = [
    {
      firstName: "Tom",
      lastName: "Smith",
      address: {
        street: "123 Main St",
        suite: "500",
        city: "San Francisco",
        region: "CA",
        postal: "54448",
        country: "US"
      },
      contactEmail: "tomsmith@gmail.com",
      companyEmail: "tomsmith@perficient.com",
      birthDate: Date.now(),
      hiredDate: Date.now(),
      role: role.DIRECTOR,
      buinessUnit: buinessUnit.API_MANAGEMENT,
      skills: [
        {
          field: {
            name:"Enterprise Architect",
            type: "Software Developement",
          },
          experience: 85,
          summary: "Oversees the group of developers"
        }
      ],
      assignedTo: mongoose.Types.ObjectId(chiefIds[0]),
    },
    {
      firstName: "Mary",
      lastName: "Thomas",
      address: {
        street: "875 west Main St",
        suite: "B",
        city: "Detroit",
        region: "MI",
        postal: "48313",
        country: "US"
      },
      contactEmail: "marythomas@gmail.com",
      companyEmail: "marythomas@perficient.com",
      birthDate: Date.now(),
      hiredDate: Date.now(),
      role: role.PROJECT_MANAGER,
      buinessUnit: buinessUnit.IBM_NBU,
      skills: [
        {
          field: {
            name:"Enterprise Architect",
            type: "Software Developement",
          },
          experience: 85,
          summary: "Oversees the group of developers"
        }
      ],
      assignedTo: mongoose.Types.ObjectId(chiefIds[0]),
    },
  ];
  return dataSeed;
} 

function employeeSeed(superiorIds){

  let dataSeed = [
      {
        firstName: "John",
        lastName: "Doe",
        address: {
          street: "123 Main St",
          suite: "500",
          city: "San Francisco",
          region: "CA",
          postal: "54448",
          country: "US"
        },
        contactEmail: "johndoe@gmail.com",
        companyEmail: "johndoe@perficient.com",
        birthDate: Date.now(),
        hiredDate: Date.now(),
        role: role.TECHNICAL_CONSULTANT,
        buinessUnit: buinessUnit.ADOBE,
        skills: [
          {
            field: {
              name:"Java",
              type: "Software Developement",
            },
            experience: 45,
            summary: "Worked with mulit-threading and generics."
          }
        ],
        assignedTo: mongoose.Types.ObjectId(superiorIds[0]),
      },
      {
        firstName: "Jane",
        lastName: "Doe",
        address: {
          street: "154 east Main Street",
          suite: "201",
          city: "San Francisco",
          region: "CA",
          postal: "54448",
          country: "US"
        },
        contactEmail: "janedoe@gmail.com",
        companyEmail: "janedoe@perficient.com",
        birthDate: Date.now(),
        hiredDate: Date.now(),
        role: role.TECHNICAL_CONSULTANT,
        buinessUnit: buinessUnit.DIGITAL_EXPERIENCE_GROUP,
        skills: [
          {
            field: {
              name:".NET",
              type: "Software Developement",
            },
            experience: 60,
            summary: "Worked with ASP.NET MVC."
          },
          {
            field: {
              name:"nodejs",
              type: "Software Developement",
            },
            experience: 36,
            summary: "Worked with RESTful APIs."
          }
        ],
        assignedTo: mongoose.Types.ObjectId(superiorIds[0]),
      },
      {
        firstName: "Jane",
        lastName: "Smith",
        address: {
          street: "875 west Main St",
          suite: "B",
          city: "Detroit",
          region: "MI",
          postal: "48313",
          country: "US"
        },
        contactEmail: "janesmith@gmail.com",
        companyEmail: "janesmith@perficient.com",
        birthDate: Date.now(),
        hiredDate: Date.now(),
        role: role.TECHNICAL_CONSULTANT,
        buinessUnit: buinessUnit.IBM_NBU,
        skills: [
          {
            field: {
              name:"Full Stack",
              type: "Software Developement",
            },
            experience: 24,
            summary: "express and node"
          },
          {
            field: {
              name:"SQL Server",
              type: "Database Developement",
            },
            experience: 36,
            summary: "designed databases and implemented  stored procedures"
          }
        ],
        assignedTo: mongoose.Types.ObjectId(superiorIds[1]),
      },
      {
        firstName: "john",
        lastName: "Smith",
        address: {
          street: "354 south St",
          suite: "4",
          city: "Detroit",
          region: "MI",
          postal: "48313",
          country: "US"
        },
        contactEmail: "johnsmith@gmail.com",
        companyEmail: "johnsmith@perficient.com",
        birthDate: Date.now(),
        hiredDate: Date.now(),
        role: role.TECHNICAL_CONSULTANT,
        buinessUnit: buinessUnit.DIGITAL_EXPERIENCE_GROUP,
        skills: [
          {
            field: {
              name:"MongoDB",
              type: "Data Analytics",
            },
            experience: 60,
            summary: "Analyze Data and generate reports"
          },
          {
            field: {
              name:"SQL Server",
              type: "Data Analytics",
            },
            experience: 36,
            summary: "Analyze Data and generate reports "
          }
        ],
        assignedTo: mongoose.Types.ObjectId(superiorIds[1]),
      },
    ];

    return dataSeed;
  }

  db.Employee.deleteMany({})
  .then(() => db.Employee.collection.insertMany(chiefSeed))
  .then((chiefData) =>{
    let chiefIds = chiefData.insertedIds;
    db.Employee.collection.insertMany(superiorSeed(chiefIds))
    .then((superiorData) => {
      console.log(superiorData + "  records inserted!");
      let superiorIds = superiorData.insertedIds;
      db.Employee.collection.insertMany(employeeSeed(superiorIds))
      .then((employeeData) => {
        console.log(employeeData + "  records inserted!");
        process.exit(0);
      })
      .catch((err) => {
        console.error(err);
        process.exit(1);
      });    
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
