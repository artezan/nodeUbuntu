define({ "api": [
  {
    "type": "DELETE",
    "url": "/companies/:companyId",
    "title": "Request  Deleted",
    "version": "0.1.0",
    "name": "deleteByToken",
    "group": "Company",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "companyId",
            "description": "<p>Must be placed as QueryParam</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://31.220.52.51:3000/api/v1/companies/5b69b23777093a04244fae68",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"data\":true}",
          "type": "json"
        }
      ]
    },
    "filename": "src/router/CompaniesRouter.ts",
    "groupTitle": "Company",
    "sampleRequest": [
      {
        "url": "http://31.220.52.51:3000/api/v1/companies/:companyId"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/companies/",
    "title": "Request all",
    "version": "0.1.0",
    "name": "get",
    "group": "Company",
    "sampleRequest": [
      {
        "url": "http://31.220.52.51:3000/api/v1/companies/"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response a JSON-Array<company>:",
          "content": "{\"data\":[{\"timestamp\":\"2018-08-07T14:52:39.369Z\",\"_id\":\"5b69b23777093a04244fae68\",\"name\":\"Compañia 1\",\"__v\":0},{\"timestamp\":\"2018-08-07T14:52:55.489Z\",\"_id\":\"5b69b24777093a04244fae69\",\"name\":\"Compañia 2\",\"__v\":0}]}",
          "type": "json"
        }
      ]
    },
    "filename": "src/router/CompaniesRouter.ts",
    "groupTitle": "Company"
  },
  {
    "type": "GET",
    "url": "/companies/:companyId",
    "title": "Request by Object Id",
    "version": "0.1.0",
    "name": "getByNameAndPassword",
    "group": "Company",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "b64",
            "description": "<p>(name:password) Must be provided as QueryParam</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://31.220.52.51:3000/api/v1/companies/5b69b23777093a04244fae68/",
        "type": "json"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://31.220.52.51:3000/api/v1/companies/"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response Company:",
          "content": "{ \"data\": { \"timestamp\": \"2018-08-07T14:52:39.369Z\", \"_id\": \"5b69b23777093a04244fae68\", \"name\": \"Compañia 1\", \"__v\": 0 } }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "timestamp",
            "description": ""
          }
        ]
      }
    },
    "filename": "src/router/CompaniesRouter.ts",
    "groupTitle": "Company"
  },
  {
    "type": "POST",
    "url": "/companies/",
    "title": "Request New",
    "version": "0.1.0",
    "name": "post",
    "group": "Company",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{ \"name\": \"Compañia 21\" }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response Created Company:",
          "content": "{ \"data\": { \"timestamp\": \"2018-08-10T15:01:46.063Z\", \"_id\": \"5b6da8da15199540284396ce\", \"name\": \"Compañia 21\", \"__v\": 0 } }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "timestamp",
            "description": ""
          }
        ]
      }
    },
    "filename": "src/router/CompaniesRouter.ts",
    "groupTitle": "Company",
    "sampleRequest": [
      {
        "url": "http://31.220.52.51:3000/api/v1/companies/"
      }
    ]
  },
  {
    "type": "PUT",
    "url": "/companies/:companyId",
    "title": "Request Update",
    "version": "0.1.0",
    "name": "put",
    "group": "Company",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "companyId",
            "description": "<p>Must be placed as QueryParam</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{ \"name\": \"Compañia 21\" }",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://31.220.52.51:3000/api/v1/companies/5b69b23777093a04244fae68",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{ \"data\": { \"timestamp\": \"2018-08-10T15:01:46.063Z\", \"_id\": \"5b6da8da15199540284396ce\", \"name\": \"Compañia 21\", \"__v\": 0 } }",
          "type": "json"
        }
      ]
    },
    "filename": "src/router/CompaniesRouter.ts",
    "groupTitle": "Company",
    "sampleRequest": [
      {
        "url": "http://31.220.52.51:3000/api/v1/companies/:companyId"
      }
    ]
  },
  {
    "type": "DELETE",
    "url": "/consultants/:consultantId",
    "title": "Request  Deleted",
    "version": "0.1.0",
    "name": "deleteByToken",
    "group": "Consultant",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "consultantId",
            "description": "<p>Must be placed as QueryParam</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://31.220.52.51:3000/api/v1/consultants/5b69b23777093a04244fae68",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"data\":true}",
          "type": "json"
        }
      ]
    },
    "filename": "src/router/ConsultantRouter.ts",
    "groupTitle": "Consultant",
    "sampleRequest": [
      {
        "url": "http://31.220.52.51:3000/api/v1/consultants/:consultantId"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/consultants/bycompanyid/:companyId",
    "title": "Request all by company",
    "version": "0.1.0",
    "name": "get",
    "group": "Consultant",
    "sampleRequest": [
      {
        "url": "http://31.220.52.51:3000/api/v1/consultants/bycompanyid/:companyId"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response a JSON-Array<consultant>:",
          "content": "{ \"data\": [ { \"timestamp\": \"2018-08-10T16:08:32.439Z\", \"rankingAverage\": 0, \"tickets\": [], \"_id\": \"5b6db8805291313ddcc318b9\", \"name\": \"Consultor 1\", \"lastName\": \"Apellido\", \"password\": \"1234\", \"description\": \"Especialidad en\", \"companyId\": \"5b6db7c05291313ddcc318b7\", \"__v\": 0 } ] }",
          "type": "json"
        }
      ]
    },
    "filename": "src/router/ConsultantRouter.ts",
    "groupTitle": "Consultant"
  },
  {
    "type": "GET",
    "url": "/consultants/byconsultantid/:consultantId",
    "title": "Request by Object Id",
    "version": "0.1.0",
    "name": "getById",
    "group": "Consultant",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "consultantId",
            "description": "<p>Must be provided as QueryParam</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://31.220.52.51:3000/api/v1/consultants/byconsultantid/5b6db8805291313ddcc318b9",
        "type": "json"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://31.220.52.51:3000/api/v1/consultants/byconsultantid/5b6db8805291313ddcc318b9"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response Consultant:",
          "content": "{ \"data\": { \"timestamp\": \"2018-08-10T16:08:32.439Z\", \"rankingAverage\": 0, \"tickets\": [], \"_id\": \"5b6db8805291313ddcc318b9\", \"name\": \"Consultor 1\", \"lastName\": \"Apellido\", \"password\": \"1234\", \"description\": \"Especialidad en\", \"companyId\": \"5b6db7c05291313ddcc318b7\", \"__v\": 0 } }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "timestamp",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "rankingAverage",
            "description": "<p>Promedio de ranking de los tickets del consultor</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "tickets[]",
            "optional": false,
            "field": "tickets",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>Area de especialidad del Consultor</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "companyId",
            "description": ""
          }
        ]
      }
    },
    "filename": "src/router/ConsultantRouter.ts",
    "groupTitle": "Consultant"
  },
  {
    "type": "POST",
    "url": "/consultants/",
    "title": "Request New",
    "version": "0.1.0",
    "name": "post",
    "group": "Consultant",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "companyId",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{ \"name\":\"Consultor 1\", \"lastName\":\"Apellido\", \"password\":\"1234\", \"description\":\"Especialidad en\", \"companyId\":\"5b6db7c05291313ddcc318b7\" }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response Created User:",
          "content": "{ \"data\": { \"timestamp\": \"2018-08-10T16:08:32.439Z\", \"rankingAverage\": 0, \"tickets\": [], \"_id\": \"5b6db8805291313ddcc318b9\", \"name\": \"Consultor 1\", \"lastName\": \"Apellido\", \"password\": \"1234\", \"description\": \"Especialidad en\", \"companyId\": \"5b6db7c05291313ddcc318b7\", \"__v\": 0 } }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "timestamp",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "rankingAverage",
            "description": "<p>Promedio de ranking de los tickets del consultor</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "tickets[]",
            "optional": false,
            "field": "tickets",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>Area de especialidad del Consultor</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "companyId",
            "description": ""
          }
        ]
      }
    },
    "filename": "src/router/ConsultantRouter.ts",
    "groupTitle": "Consultant",
    "sampleRequest": [
      {
        "url": "http://31.220.52.51:3000/api/v1/consultants/"
      }
    ]
  },
  {
    "type": "PUT",
    "url": "/consultants/:_id",
    "title": "Request Update",
    "version": "0.1.0",
    "name": "put",
    "group": "Consultant",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "consultantId",
            "description": "<p>Must be provided as QueryParam</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "lastName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "companyId",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{ \"password\":\"3ede3\" }",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://31.220.52.51:3000/api/v1/consultants/5b6db8805291313ddcc318b9",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{ \"data\": true }",
          "type": "json"
        }
      ]
    },
    "filename": "src/router/ConsultantRouter.ts",
    "groupTitle": "Consultant",
    "sampleRequest": [
      {
        "url": "http://31.220.52.51:3000/api/v1/consultants/:_id"
      }
    ]
  },
  {
    "type": "DELETE",
    "url": "/customers/:customerId",
    "title": "Request  Deleted",
    "version": "0.1.0",
    "name": "deleteByToken",
    "group": "Customers",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "customerId",
            "description": "<p>Must be placed as QueryParam</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://31.220.52.51:3000/api/v1/customers/5b69b23777093a04244fae68",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"data\":true}",
          "type": "json"
        }
      ]
    },
    "filename": "src/router/CustomersRouter.ts",
    "groupTitle": "Customers",
    "sampleRequest": [
      {
        "url": "http://31.220.52.51:3000/api/v1/customers/:customerId"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/customers/bycompanyid/:companyId",
    "title": "Request all by companyId",
    "version": "0.1.0",
    "name": "get",
    "group": "Customers",
    "sampleRequest": [
      {
        "url": "http://31.220.52.51:3000/api/v1/customers/bycompanyid/5b6da8da15199540284396ce"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response a JSON-Array<customer>:",
          "content": "{ \"data\": [ { \"timestamp\": \"2018-08-10T15:37:34.097Z\", \"totalHours\": 0, \"tickets\": [], \"_id\": \"5b6db13e09d62f219495a7dd\", \"logo\": \"http://31.220.52.51:3000/LOGO.png\", \"name\": \"Cliente 1\", \"adress\": \"Direccion 1\", \"phone\": 22222, \"email\": \"cliente@gmail.com\", \"workArea\": \"Industria de ...\", \"password\": \"12345\", \"companyId\": \"5b6da8da15199540284396ce\", \"__v\": 0 } ] }",
          "type": "json"
        }
      ]
    },
    "filename": "src/router/CustomersRouter.ts",
    "groupTitle": "Customers"
  },
  {
    "type": "GET",
    "url": "/customers/bycustomerid/:_id",
    "title": "Request by Object Id",
    "version": "0.1.0",
    "name": "getById",
    "group": "Customers",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>Must be provided as QueryParam</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://31.220.52.51:3000/api/v1/customers/bycustomerid/5b6db13e09d62f219495a7dd",
        "type": "json"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://31.220.52.51:3000/api/v1customers/bycustomerid/5b6db13e09d62f219495a7dd"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response Customer:",
          "content": "{ \"data\": { \"timestamp\": \"2018-08-10T15:37:34.097Z\", \"totalHours\": 0, \"tickets\": [], \"_id\": \"5b6db13e09d62f219495a7dd\", \"logo\": \"http://31.220.52.51:3000/LOGO.png\", \"name\": \"Cliente 1\", \"adress\": \"Direccion 1\", \"phone\": 22222, \"email\": \"cliente@gmail.com\", \"workArea\": \"Industria de ...\", \"password\": \"12345\", \"companyId\": \"5b6da8da15199540284396ce\", \"__v\": 0 } }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "timestamp",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "totalHours",
            "description": "<p>Suma de horas de los tickets del cliente</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "tickets[]",
            "optional": false,
            "field": "tickets",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "logo",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "adress",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "phone",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "workArea",
            "description": "<p>Area de desempeño del cliente</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "companyId",
            "description": ""
          }
        ]
      }
    },
    "filename": "src/router/CustomersRouter.ts",
    "groupTitle": "Customers"
  },
  {
    "type": "POST",
    "url": "/customers/",
    "title": "Request New",
    "version": "0.1.0",
    "name": "post",
    "group": "Customers",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "logo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "adress",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "tickets[]",
            "optional": false,
            "field": "tickets._id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "phone",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "workArea",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "companyId",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{ \"logo\":\"http://31.220.52.51:3000/LOGO.png\", \"name\":\"Cliente 1\", \"adress\":\"Direccion 1\", \"tickets\":[], \"phone\":\"22222\", \"email\":\"cliente@gmail.com\", \"password\":\"12345\", \"workArea\":\"Industria de ...\", \"companyId\":\"5b6da8da15199540284396ce\" }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response Created User:",
          "content": "{ \"data\": { \"timestamp\": \"2018-08-10T15:37:34.097Z\", \"totalHours\": 0, \"tickets\": [], \"_id\": \"5b6db13e09d62f219495a7dd\", \"logo\": \"http://31.220.52.51:3000/LOGO.png\", \"name\": \"Cliente 1\", \"adress\": \"Direccion 1\", \"phone\": 22222, \"email\": \"cliente@gmail.com\", \"workArea\": \"Industria de ...\", \"password\": \"12345\", \"companyId\": \"5b6da8da15199540284396ce\", \"__v\": 0 } }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "timestamp",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "totalHours",
            "description": "<p>Suma de horas de los tickets del cliente</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "tickets[]",
            "optional": false,
            "field": "tickets",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "logo",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "adress",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "phone",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "workArea",
            "description": "<p>Area de desempeño del cliente</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "companyId",
            "description": ""
          }
        ]
      }
    },
    "filename": "src/router/CustomersRouter.ts",
    "groupTitle": "Customers",
    "sampleRequest": [
      {
        "url": "http://31.220.52.51:3000/api/v1/customers/"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/customers/uploadImg",
    "title": "Request Upload Logo",
    "version": "0.1.0",
    "name": "post_Upload_photo",
    "group": "Customers",
    "description": "<p>Se debe enviar la imagen con form-data y con key imagen1 La imagen se guarda en http://31.220.52.51:3000/Nombre.png</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "imagen1",
            "description": "<p>Form-based File Upload in HTML.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{ \"imagen1\":\"File\" }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response Created User:",
          "content": "{ \"data\": \"build/public/LOGO.png\" }",
          "type": "json"
        }
      ]
    },
    "filename": "src/router/CustomersRouter.ts",
    "groupTitle": "Customers",
    "sampleRequest": [
      {
        "url": "http://31.220.52.51:3000/api/v1/customers/uploadImg"
      }
    ]
  },
  {
    "type": "PUT",
    "url": "/customers/:customerId",
    "title": "Request Update",
    "version": "0.1.0",
    "name": "put",
    "group": "Customers",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "customerId",
            "description": "<p>Must be placed as QueryParam</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "logo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "adress",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "tickets[]",
            "optional": false,
            "field": "tickets._id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "phone",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "workArea",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "companyId",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{ \"phone\":\"2224444\" }",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://31.220.52.51:3000:3000/api/v1/customers/5b6db13e09d62f219495a7dd",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{ \"data\": true }",
          "type": "json"
        }
      ]
    },
    "filename": "src/router/CustomersRouter.ts",
    "groupTitle": "Customers",
    "sampleRequest": [
      {
        "url": "http://31.220.52.51:3000/api/v1/customers/:customerId"
      }
    ]
  },
  {
    "type": "DELETE",
    "url": "/posts/:_id",
    "title": "Request  Deleted",
    "version": "0.1.0",
    "name": "deleteByToken",
    "group": "Post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>Must be placed as QueryParam</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://31.220.52.51:3000/api/v1/posts/5b6dccf7548e41383c4174ae",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"data\":true}",
          "type": "json"
        }
      ]
    },
    "filename": "src/router/PostsRouter.ts",
    "groupTitle": "Post",
    "sampleRequest": [
      {
        "url": "http://31.220.52.51:3000/api/v1/posts/:_id"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/posts/byticketid/",
    "title": "Request all",
    "version": "0.1.0",
    "name": "get",
    "group": "Post",
    "sampleRequest": [
      {
        "url": "http://31.220.52.51:3000/api/v1/posts/byticketid/"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response a JSON-Array<Post>:",
          "content": "{ \"data\": [ { \"timestamp\": \"2018-08-10T17:35:51.812Z\", \"_id\": \"5b6dccf7548e41383c4174ae\", \"title\": \"Consultoria  de Algo\", \"content\": \"Se requiere una consulta para lograr un objetivo\", \"customer\": { \"timestamp\": \"2018-08-10T16:06:48.854Z\", \"totalHours\": 7, \"tickets\": [ \"5b6dbf67b9da8f0894dd2a05\" ], \"_id\": \"5b6db8185291313ddcc318b8\", \"logo\": \"http://31.220.52.51:3000/LOGO.png\", \"name\": \"Cliente 1\", \"adress\": \"Direccion 1\", \"phone\": 22222, \"email\": \"cliente@gmail.com\", \"workArea\": \"Industria de ...\", \"password\": \"12345\", \"companyId\": \"5b6db7c05291313ddcc318b7\", \"__v\": 3 }, \"ticket\": { \"timestamp\": \"2018-08-10T16:37:59.838Z\", \"ranking\": 0, \"cost\": 2000, \"status\": \"Pendiente\", \"isPay\": false, \"_id\": \"5b6dbf67b9da8f0894dd2a05\", \"hours\": 7, \"description\": \"Solucionar problema con\", \"customer\": \"5b6db8185291313ddcc318b8\", \"companyId\": \"5b6db7c05291313ddcc318b7\", \"__v\": 0, \"consultant\": \"5b6dc7f2b9da8f0894dd2a06\" }, \"isByCustomer\": true, \"__v\": 0 }, { \"timestamp\": \"2018-08-10T17:41:32.883Z\", \"_id\": \"5b6dce4c548e41383c4174af\", \"content\": \"Claro yo lo puedo ayudar a lograr sus objetivos\", \"consultant\": { \"timestamp\": \"2018-08-10T17:14:26.803Z\", \"rankingAverage\": 0, \"tickets\": [], \"_id\": \"5b6dc7f2b9da8f0894dd2a06\", \"name\": \"Consultor 2\", \"lastName\": \"Apellido\", \"password\": \"1234\", \"description\": \"Especialidad en\", \"companyId\": \"5b6db7c05291313ddcc318b7\", \"__v\": 1 }, \"ticket\": { \"timestamp\": \"2018-08-10T16:37:59.838Z\", \"ranking\": 0, \"cost\": 2000, \"status\": \"Pendiente\", \"isPay\": false, \"_id\": \"5b6dbf67b9da8f0894dd2a05\", \"hours\": 7, \"description\": \"Solucionar problema con\", \"customer\": \"5b6db8185291313ddcc318b8\", \"companyId\": \"5b6db7c05291313ddcc318b7\", \"__v\": 0, \"consultant\": \"5b6dc7f2b9da8f0894dd2a06\" }, \"isByCustomer\": false, \"__v\": 0 } ] }",
          "type": "json"
        }
      ]
    },
    "filename": "src/router/PostsRouter.ts",
    "groupTitle": "Post"
  },
  {
    "type": "POST",
    "url": "/posts/",
    "title": "Request New",
    "version": "0.1.0",
    "name": "post",
    "group": "Post",
    "description": "<p>Se debe asignar un Cliente id o un Consultor id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>Titulo del Comentario</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>Contenido o problema</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": true,
            "field": "customerId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": true,
            "field": "consultantId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "ticketId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "isByCustomer",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{ \"title\":\"Consultoria  de Algo\", \"content\":\"Se requiere una consulta para lograr un objetivo\", \"customerId\":\"5b6db8185291313ddcc318b8\", \"ticketId\":\"5b6dbf67b9da8f0894dd2a05\", \"isByCustomer\": true }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response Created Post:",
          "content": "{ \"data\": { \"timestamp\": \"2018-08-10T17:35:51.812Z\", \"_id\": \"5b6dccf7548e41383c4174ae\", \"title\": \"Consultoria  de Algo\", \"content\": \"Se requiere una consulta para lograr un objetivo\", \"customer\": \"5b6db8185291313ddcc318b8\", \"ticket\": \"5b6dbf67b9da8f0894dd2a05\", \"isByCustomer\": true, \"__v\": 0 } }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "timestamp",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>Titulo</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>Contenido</p>"
          },
          {
            "group": "Success 200",
            "type": "customer[]",
            "optional": false,
            "field": "customer",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "consultant[]",
            "optional": false,
            "field": "consultant",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "tickets[]",
            "optional": false,
            "field": "tickets",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "isByCustomer",
            "description": ""
          }
        ]
      }
    },
    "filename": "src/router/PostsRouter.ts",
    "groupTitle": "Post",
    "sampleRequest": [
      {
        "url": "http://31.220.52.51:3000/api/v1/posts/"
      }
    ]
  },
  {
    "type": "PUT",
    "url": "/posts/:postId",
    "title": "Request Update",
    "version": "0.1.0",
    "name": "put",
    "group": "Post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "postId",
            "description": "<p>Must be placed as QueryParam</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>Titulo del Comentario</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>Contenido o problema</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": true,
            "field": "customerId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": true,
            "field": "consultantId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "ticketId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "isByCustome",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{ \"content\": \"Se requiere una consultoria para lograr un objetivo\" }",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://31.220.52.51:3000/api/v1/posts/5b6dccf7548e41383c4174ae",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{ \"data\": true }",
          "type": "json"
        }
      ]
    },
    "filename": "src/router/PostsRouter.ts",
    "groupTitle": "Post",
    "sampleRequest": [
      {
        "url": "http://31.220.52.51:3000/api/v1/posts/:postId"
      }
    ]
  },
  {
    "type": "DELETE",
    "url": "/tickets/:_id",
    "title": "Request  Deleted",
    "version": "0.1.0",
    "name": "deleteByToken",
    "group": "Ticket",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>Must be placed as QueryParam</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://31.220.52.51:3000/api/v1/tickets/5b6dbf67b9da8f0894dd2a05",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\"data\":true}",
          "type": "json"
        }
      ]
    },
    "filename": "src/router/TicketsRouter.ts",
    "groupTitle": "Ticket",
    "sampleRequest": [
      {
        "url": "http://31.220.52.51:3000/api/v1/tickets/:_id"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/tickets/bycompanyid/:companyId",
    "title": "Request all",
    "version": "0.1.0",
    "name": "get",
    "group": "Ticket",
    "sampleRequest": [
      {
        "url": "http://31.220.52.51:3000/api/v1/tickets/bycompanyid/5b6db7c05291313ddcc318b7"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response a JSON-Array<ticket>:",
          "content": "{ \"data\": [ { \"timestamp\": \"2018-08-10T16:37:59.838Z\", \"ranking\": 0, \"cost\": 2000, \"status\": \"Pendiente\", \"isPay\": false, \"_id\": \"5b6dbf67b9da8f0894dd2a05\", \"hours\": 7, \"description\": \"Solucionar problema con\", \"customer\": { \"timestamp\": \"2018-08-10T16:06:48.854Z\", \"totalHours\": 7, \"tickets\": [ \"5b6dbf67b9da8f0894dd2a05\" ], \"_id\": \"5b6db8185291313ddcc318b8\", \"logo\": \"http://31.220.52.51:3000/LOGO.png\", \"name\": \"Cliente 1\", \"adress\": \"Direccion 1\", \"phone\": 22222, \"email\": \"cliente@gmail.com\", \"workArea\": \"Industria de ...\", \"password\": \"12345\", \"companyId\": \"5b6db7c05291313ddcc318b7\", \"__v\": 3 }, \"companyId\": \"5b6db7c05291313ddcc318b7\", \"__v\": 0, \"consultant\": { \"timestamp\": \"2018-08-10T17:14:26.803Z\", \"rankingAverage\": 0, \"tickets\": [], \"_id\": \"5b6dc7f2b9da8f0894dd2a06\", \"name\": \"Consultor 2\", \"lastName\": \"Apellido\", \"password\": \"1234\", \"description\": \"Especialidad en\", \"companyId\": \"5b6db7c05291313ddcc318b7\", \"__v\": 1 } } ] }",
          "type": "json"
        }
      ]
    },
    "filename": "src/router/TicketsRouter.ts",
    "groupTitle": "Ticket"
  },
  {
    "type": "GET",
    "url": "/tickets/byticketid/:ticketId",
    "title": "Request by Object Id",
    "version": "0.1.0",
    "name": "getById",
    "group": "Ticket",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "ticketId",
            "description": "<p>Must be provided as QueryParam</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://31.220.52.51:3000/api/v1/tickets/byticketid/5b6db7c05291313ddcc318b7",
        "type": "json"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://31.220.52.51:3000/api/v1/tickets/byticketid/5b6db7c05291313ddcc318b7"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response User:",
          "content": "{ \"data\": [ { \"timestamp\": \"2018-08-10T16:37:59.838Z\", \"ranking\": 0, \"cost\": 2000, \"status\": \"Pendiente\", \"isPay\": false, \"_id\": \"5b6dbf67b9da8f0894dd2a05\", \"hours\": 7, \"description\": \"Solucionar problema con\", \"customer\": { \"timestamp\": \"2018-08-10T16:06:48.854Z\", \"totalHours\": 7, \"tickets\": [ \"5b6dbf67b9da8f0894dd2a05\" ], \"_id\": \"5b6db8185291313ddcc318b8\", \"logo\": \"http://31.220.52.51:3000/LOGO.png\", \"name\": \"Cliente 1\", \"adress\": \"Direccion 1\", \"phone\": 22222, \"email\": \"cliente@gmail.com\", \"workArea\": \"Industria de ...\", \"password\": \"12345\", \"companyId\": \"5b6db7c05291313ddcc318b7\", \"__v\": 3 }, \"companyId\": \"5b6db7c05291313ddcc318b7\", \"__v\": 0, \"consultant\": { \"timestamp\": \"2018-08-10T17:14:26.803Z\", \"rankingAverage\": 0, \"tickets\": [], \"_id\": \"5b6dc7f2b9da8f0894dd2a06\", \"name\": \"Consultor 2\", \"lastName\": \"Apellido\", \"password\": \"1234\", \"description\": \"Especialidad en\", \"companyId\": \"5b6db7c05291313ddcc318b7\", \"__v\": 1 } } ] }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "timestamp",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "ranking",
            "description": "<p>Calificación dada por el cliente</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "cost",
            "description": "<p>Costo asignado por la empresa</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>Estado del ticket que el consultor asigna \t(Atendiendo. Cerrado. Pendiente)</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "isPay",
            "description": "<p>Si esta pagado o no</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "hours",
            "description": "<p>Horas para cumplir el ticket</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>De lo que trata (servicio)</p>"
          },
          {
            "group": "Success 200",
            "type": "customer",
            "optional": false,
            "field": "customer",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "consultant",
            "optional": false,
            "field": "consultant",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "companyId",
            "description": ""
          }
        ]
      }
    },
    "filename": "src/router/TicketsRouter.ts",
    "groupTitle": "Ticket"
  },
  {
    "type": "POST",
    "url": "/tickets/newticket/",
    "title": "Request New",
    "version": "0.1.0",
    "name": "post",
    "group": "Ticket",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "hours",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>De que va a tratar la consultoria</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "customerId",
            "description": "<p>Cliente que levanta el ticket</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": true,
            "field": "consultantId",
            "description": "<p>Consultor asignado por la empresa</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "companyId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "cost",
            "description": "<p>Costo del ticket asignado por la empresa</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{ \"hours\": 8, \"description\":\"Solucionar problema con\", \"customerId\":\"5b6db8185291313ddcc318b8\", \"companyId\":\"5b6db7c05291313ddcc318b7\", \"cost\": 2000 }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response Created Ticket:",
          "content": "{ \"data\": { \"timestamp\": \"2018-08-10T16:37:59.838Z\", \"ranking\": 0, \"cost\": 2000, \"status\": \"Pendiente\", \"isPay\": false, \"_id\": \"5b6dbf67b9da8f0894dd2a05\", \"hours\": 8, \"description\": \"Solucionar problema con\", \"customer\": \"5b6db8185291313ddcc318b8\", \"companyId\": \"5b6db7c05291313ddcc318b7\", \"__v\": 0 } }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "timestamp",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "ranking",
            "description": "<p>Calificación dada por el cliente</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "cost",
            "description": "<p>Costo asignado por la empresa</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>Estado del ticket que el consultor asigna \t(Atendiendo. Cerrado. Pendiente)</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "isPay",
            "description": "<p>Si esta pagado o no</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "hours",
            "description": "<p>Horas para cumplir el ticket</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>De lo que trata (servicio)</p>"
          },
          {
            "group": "Success 200",
            "type": "customer",
            "optional": false,
            "field": "customer",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "consultant",
            "optional": false,
            "field": "consultant",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "companyId",
            "description": ""
          }
        ]
      }
    },
    "filename": "src/router/TicketsRouter.ts",
    "groupTitle": "Ticket",
    "sampleRequest": [
      {
        "url": "http://31.220.52.51:3000/api/v1/tickets/newticket/"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/tickets/changeticket/:ticketId",
    "title": "Change Customer/Consultant",
    "version": "0.1.0",
    "name": "post_Change_Customer_Consultant",
    "group": "Ticket",
    "description": "<p>Es para cambiar de Consultor o de Cliente</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "ticketId",
            "description": "<p>Must be placed as QueryParam</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "newCustomerId",
            "description": "<p>Nuevo Cliente</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "oldCustomerId",
            "description": "<p>Cliente anterior</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "newConsultantId",
            "description": "<p>Nuevo Consultor</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "oldConsultantId",
            "description": "<p>Consultor anterior</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{ \"newConsultantId\":\"5b6dc7f2b9da8f0894dd2a06\", \"oldConsultantId\" : \"5b6db8805291313ddcc318b9\" }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response Created Ticket:",
          "content": "{ \"data\": true }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "timestamp",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "ranking",
            "description": "<p>Calificación dada por el cliente</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "cost",
            "description": "<p>Costo asignado por la empresa</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>Estado del ticket que el consultor asigna \t(Atendiendo. Cerrado. Pendiente)</p>"
          },
          {
            "group": "Success 200",
            "type": "boolean",
            "optional": false,
            "field": "isPay",
            "description": "<p>Si esta pagado o no</p>"
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "hours",
            "description": "<p>Horas para cumplir el ticket</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "description",
            "description": "<p>De lo que trata (servicio)</p>"
          },
          {
            "group": "Success 200",
            "type": "customer",
            "optional": false,
            "field": "customer",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "consultant",
            "optional": false,
            "field": "consultant",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "ObjectId",
            "optional": false,
            "field": "companyId",
            "description": ""
          }
        ]
      }
    },
    "filename": "src/router/TicketsRouter.ts",
    "groupTitle": "Ticket",
    "sampleRequest": [
      {
        "url": "http://31.220.52.51:3000/api/v1/tickets/changeticket/:ticketId"
      }
    ]
  },
  {
    "type": "PUT",
    "url": "/tickets/:ticketId",
    "title": "Request Update",
    "version": "0.1.0",
    "name": "put",
    "group": "Ticket",
    "description": "<p>Se debe debe de asignar un NUEVO consultor o/y cliente con este end-point. Esto se hace asi debido a que un ticket solo puede contener un consultor/cliente. Se puede asignar ranking, status, pagado Para cambiar de cliente y/o consultor ver &quot;Change Customer/Consultant&quot;.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "ticketId",
            "description": "<p>Must be placed as QueryParam</p>"
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": true,
            "field": "customer",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": true,
            "field": "consultant",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "hours",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "description",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "cost",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "ranking",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "status",
            "description": "<p>(Atendiendo. Cerrado. Pendiente)</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": true,
            "field": "isPay",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{ \"consultant\": \"5b6db8805291313ddcc318b9\", \"customer\": \"_id\" }",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://31.220.52.51:3000/api/v1/tickets/5b6dbf67b9da8f0894dd2a05",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{ \"data\": true }",
          "type": "json"
        }
      ]
    },
    "filename": "src/router/TicketsRouter.ts",
    "groupTitle": "Ticket",
    "sampleRequest": [
      {
        "url": "http://31.220.52.51:3000/api/v1/tickets/:ticketId"
      }
    ]
  }
] });
