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
    id: "6d70d4e4-be1b-4364-b264-ad726b03038b",
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
        id:"03dc545f-7000-4965-9aeb-b9bf8b09f72b",
        experience: 120,
        summary: "Makes Decisions",
        field: {
          id:"b0e878ac-c102-4a45-89ad-04e44ed6f2e9",
          name:"Corporate Management",
          type: "Software Industry"
        }
      }
    ],
    assignedTo: null,
  }
];

function superiorSeed (chiefIds){
  let dataSeed = [
    {
      id: "76e12674-5d75-46f9-ac21-acc2d112100c",
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
          id: "fc55fde4-4385-406a-af5b-372194084c38",
          experience: 85,
          summary: "Oversees the group of developers",
          field: {
            id: "631c75e3-0b27-4df4-b131-d51d605746e3",
            name:"Enterprise Architect",
            type: "Software Developement"
          }
        }
      ],
      assignedTo: mongoose.Types.ObjectId(chiefIds[0]),
    },
    {
      id: "674cbaaa-1cb9-40c7-97ff-b20240818be4",
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
          id: "5f9446c7-abb7-4a99-a5d7-3434a791ff46",
          experience: 85,
          summary: "Oversees the group of developers",
          field: {
            id: "ad479a3c-4a68-4cf1-9883-29013bb5eb31",
            name:"Enterprise Architect",
            type: "Software Developement"
          }
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
        id: "519434ef-acda-4cbb-b2fc-cd59ef880507",
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
            id: "d8154468-d6bf-4870-bc54-3a1b7181d18f",
            experience: 45,
            summary: "Worked with mulit-threading and generics.",
            field: {
              id: "ade1e100-8af9-43ac-926c-175bc2b3b39c",
              name:"Java",
              type: "Software Developement"
            }
          }
        ],
        assignedTo: mongoose.Types.ObjectId(superiorIds[0]),
      },
      {
        id: "943881f2-96d0-45ea-9ff3-0c04fe45da31",
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
            id: "27b00b5c-5dac-489a-bafe-4b5f0313f94e",
            experience: 36,
            summary: "Worked with RESTful APIs.",
            field: {
              id: "977530a4-3936-4f2d-8b9b-ba2d1ca6e6f5",
              name:".NET",
              type: "Software Developement"
            }
          },
          {
            id: "180b9329-f04e-4399-9b39-e5197fdb5219",
            experience: 36,
            summary: "Worked with RESTful APIs.",
            field: {
              id: "667deeb9-048b-4267-ad06-34a9854d0cc2",
              name:"nodejs",
              type: "Software Developement"
            }
          }
        ],
        assignedTo: mongoose.Types.ObjectId(superiorIds[0]),
      },
      {
        id: "de253c69-068d-40e1-8459-e089a21289a5",
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
            id: "1f512f9d-7637-4b37-bb5d-55a16286dd12",
            experience: 24,
            summary: "express and node",
            field: {
              id: "5e33bb8f-2230-4909-b5af-fa388d923d01",
              name:"Full Stack",
              type: "Software Developement"
            }
          },
          {
            id: "d7f3b4b2-af7a-4193-b5dd-8b8f1bd73f05",
            experience: 36,
            summary: "designed databases and implemented  stored procedures",
            field: {
              id: "1b0d82d8-70da-4d7c-b3ad-697a8679ebbc",
              name:"SQL Server",
              type: "Database Developement"
            }
          }
        ],
        assignedTo: mongoose.Types.ObjectId(superiorIds[1]),
      },
      {
        id: "",
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
            id: "66cdcf08-d5a9-4b13-9d0a-da469323441e",
            experience: 60,
            summary: "Analyze Data and generate reports",
            field: {
              id: "4b6efd26-e368-4bf4-9496-59442612d29b",
              name:"MongoDB",
              type: "Data Analytics"
            }
          },
          {
            id: "50f5a4f6-a28c-4d84-bf57-a86e1326dfec",
            experience: 36,
            summary: "Analyze Data and generate reports ",
            field: {
              id: "834cb8e7-51b8-4a4f-b9af-599a2e741b46",
              name:"SQL Server",
              type: "Data Analytics"
            }
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
