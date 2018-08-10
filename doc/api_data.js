define({ "api": [
  {
    "type": "GET",
    "url": "/books/",
    "title": "Request all",
    "version": "0.1.0",
    "name": "get",
    "group": "Books",
    "sampleRequest": [
      {
        "url": "http://31.220.52.51:3000/api/v1/books/"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response a JSON-Array<books>:",
          "content": "{\"data\":[\n{ \"createAt\": \"2018-04-15T21:17:41.101Z\", \"name\": \"libro1\", \"pages\": 40, \"_id\": \"5ad3c175d4f5791f80c86742\", \"__v\": 0 }, { \"createAt\": \"2018-04-15T21:19:18.433Z\", \"name\": \"libro2\", \"pages\": 50, \"_id\": \"5ad3c1d6d4f5791f80c86744\", \"__v\": 0 }, { \"createAt\": \"2018-04-15T21:19:26.769Z\", \"name\": \"libro33\", \"pages\": 151, \"_id\": \"5ad3c1ded4f5791f80c86745\", \"__v\": 0 }, { \"createAt\": \"2018-04-15T21:19:36.520Z\", \"name\": \"libro4\", \"pages\": 150, \"_id\": \"5ad3c1e8d4f5791f80c86746\", \"__v\": 0 }\n]}",
          "type": "json"
        }
      ]
    },
    "filename": "src/router/BookRouter.ts",
    "groupTitle": "Books"
  },
  {
    "type": "DELETE",
    "url": "/users/:companyId",
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
        "url": "http://31.220.52.51:3000/api/v1/users/:companyId"
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
    "name": "getById",
    "group": "Company",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "companyId",
            "description": "<p>Must be provided as QueryParam</p>"
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
            "optional": true,
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
            "optional": true,
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
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
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
    "url": "/consultant/:_id",
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
            "field": "_id",
            "description": "<p>Must be placed as QueryParam</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "https://cesarapp12.herokuapp.com/api/v1/users/5a9c4bb05e46d22f64abc15a",
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
        "url": "http://31.220.52.51:3000/api/v1/consultant/:_id"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/users/",
    "title": "Request all",
    "version": "0.1.0",
    "name": "get",
    "group": "Consultant",
    "sampleRequest": [
      {
        "url": "http://31.220.52.51:3000/api/v1/consultant/"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response a JSON-Array<user>:",
          "content": "{\"data\":[\n{\"createdAt\": \"2018-04-15T22:08:19.645Z\", \"updatedAt\": \"2018-04-15T22:08:19.645Z\", \"firstName\": \"user102\", \"lastName\": \"last102\", \"username\": \"user102\", \"email\": \"algo@a456.com\", \"password\": \"5636\", \"posts\": [ { \"timestamp\": \"2018-07-29T15:08:01.298Z\", \"title\": \"algo\", \"slug\": \"\", \"content\": \"\", \"featuredImage\": \"\", \"category\": \"c\", \"published\": false, \"_id\": \"5abbfcc0734d1d56e20469e2\" } ], \"books\": [ { \"createAt\": \"2018-04-15T21:19:18.433Z\", \"name\": \"libro2\", \"pages\": 50, \"_id\": \"5ad3c1d6d4f5791f80c86744\", \"__v\": 0 }, { \"createAt\": \"2018-04-15T21:17:41.101Z\", \"name\": \"libro1\", \"pages\": 40, \"_id\": \"5ad3c175d4f5791f80c86742\", \"__v\": 0 } ], \"_id\": \"5ad3cd5346a90e3d1c9c09a1\", \"__v\": 0 }, { \"createdAt\": \"2018-04-15T22:13:52.471Z\", \"updatedAt\": \"2018-04-15T22:13:52.471Z\", \"firstName\": \"user25\", \"lastName\": \"last25\", \"username\": \"username25\", \"email\": \"algo@a456.com\", \"password\": \"5636\", \"posts\": [ { \"timestamp\": \"2018-07-29T15:08:01.298Z\", \"title\": \"algo\", \"slug\": \"\", \"content\": \"\", \"featuredImage\": \"\", \"category\": \"c\", \"published\": false, \"_id\": \"5abbfcc0734d1d56e20469e2\" }, { \"timestamp\": \"2018-03-29T13:45:17.776Z\", \"title\": \"Post4\", \"slug\": \"post2\", \"content\": \"algo contenido\", \"featuredImage\": \"imagen\", \"category\": \"category\", \"published\": true, \"_id\": \"5abcededfb5dfb236c199e83\", \"__v\": 0 } ], \"books\": [ { \"createAt\": \"2018-04-15T21:19:18.433Z\", \"name\": \"libro2\", \"pages\": 50, \"_id\": \"5ad3c1d6d4f5791f80c86744\", \"__v\": 0 }, { \"createAt\": \"2018-04-15T21:17:41.101Z\", \"name\": \"libro1\", \"pages\": 40, \"_id\": \"5ad3c175d4f5791f80c86742\", \"__v\": 0 }, { \"createAt\": \"2018-04-15T21:19:36.520Z\", \"name\": \"libro4\", \"pages\": 150, \"_id\": \"5ad3c1e8d4f5791f80c86746\", \"__v\": 0 } ], \"_id\": \"5ad3cea0206c9611d0a7906c\", \"__v\": 0 }\n]}",
          "type": "json"
        }
      ]
    },
    "filename": "src/router/ConsultantRouter.ts",
    "groupTitle": "Consultant"
  },
  {
    "type": "GET",
    "url": "/consultant/:_id",
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
            "field": "_id",
            "description": "<p>Must be provided as QueryParam</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "https://cesarapp12.herokuapp.com/api/v1/users/5a9c4bb05e46d22f64abc15a",
        "type": "json"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://31.220.52.51:3000/api/v1/consultant/"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response User:",
          "content": "{\"data\": { \"createdAt\": \"2018-07-29T15:07:59.022Z\", \"updatedAt\": \"2018-07-29T15:07:59.022Z\", \"firstName\": \"user501\", \"lastName\": \"lastname2\", \"username\": \"username501\", \"email\": \"demo_user@a.com\", \"password\": \"5636\", \"posts\": [ { \"timestamp\": \"2018-03-29T13:44:27.979Z\", \"title\": \"Post1\", \"slug\": \"post1\", \"content\": \"algo contenido\", \"featuredImage\": \"imagen\", \"category\": \"category\", \"published\": false, \"_id\": \"5abcedbbfb5dfb236c199e81\", \"__v\": 0 }, { \"timestamp\": \"2018-03-29T13:45:17.776Z\", \"title\": \"Post4\", \"slug\": \"post2\", \"content\": \"algo contenido\", \"featuredImage\": \"imagen\", \"category\": \"category\", \"published\": true, \"_id\": \"5abcededfb5dfb236c199e83\", \"__v\": 0 } ], \"books\": [ { \"createAt\": \"2018-04-15T21:17:41.101Z\", \"name\": \"libro1\", \"pages\": 40, \"_id\": \"5ad3c175d4f5791f80c86742\", \"__v\": 0 }, { \"createAt\": \"2018-04-15T21:17:41.101Z\", \"name\": \"libro1\", \"pages\": 40, \"_id\": \"5ad3c175d4f5791f80c86742\", \"__v\": 0 } ], \"_id\": \"5b5dd84f7c124a2554381c90\", \"__v\": 0 } }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "updatedAt",
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
            "field": "firstName",
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
            "field": "username",
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
            "field": "password",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Books",
            "optional": false,
            "field": "books",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Post",
            "optional": false,
            "field": "post",
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
    "url": "/consultant/",
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
            "field": "firstName",
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
            "field": "username",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
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
            "type": "Books",
            "optional": false,
            "field": "books",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "book._id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Posts",
            "optional": false,
            "field": "posts",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "post._id",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\"firstName\": \"user50\", \"lastName\": \"lastname2\", \"username\": \"username50\", \"email\": \"demo_user@a.com\", \"password\": \"5636\",\"posts\": [\"5abcedbbfb5dfb236c199e81\",\"5abcededfb5dfb236c199e83\"],\"books\": [\"5ad3c175d4f5791f80c86742\",\"5ad3c1d6d4f5791f80c86744\"] }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response Created User:",
          "content": "{\"data\": { \"createdAt\": \"2018-07-29T15:07:59.022Z\", \"updatedAt\": \"2018-07-29T15:07:59.022Z\", \"firstName\": \"user501\", \"lastName\": \"lastname2\", \"username\": \"username501\", \"email\": \"demo_user@a.com\", \"password\": \"5636\", \"posts\": [ \"5abcedbbfb5dfb236c199e81\", \"5abcededfb5dfb236c199e83\" ], \"books\": [ \"5ad3c175d4f5791f80c86742\", \"5ad3c175d4f5791f80c86742\" ], \"_id\": \"5b5dd84f7c124a2554381c90\", \"__v\": 0 } }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "updatedAt",
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
            "field": "firstName",
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
            "field": "username",
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
            "field": "password",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Books",
            "optional": false,
            "field": "books",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Post",
            "optional": false,
            "field": "post",
            "description": ""
          }
        ]
      }
    },
    "filename": "src/router/ConsultantRouter.ts",
    "groupTitle": "Consultant",
    "sampleRequest": [
      {
        "url": "http://31.220.52.51:3000/api/v1/consultant/"
      }
    ]
  },
  {
    "type": "PUT",
    "url": "/consultant/:_id",
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
            "field": "_id",
            "description": "<p>Must be placed as QueryParam</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "firstName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "lastName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "username",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "password",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Posts",
            "optional": true,
            "field": "posts",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "post._id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Books",
            "optional": true,
            "field": "books",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "book._id",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{ \"lastName\": \"lastname21\",\"books\": [ \"5ad3c1d6d4f5791f80c86744\" ] }",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "https://cesarapp12.herokuapp.com/api/v1/users/5a9c4bb05e46d22f64abc15a",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{ \"data\": { \"createdAt\": \"2018-07-29T15:07:59.022Z\", \"updatedAt\": \"2018-07-29T15:07:59.022Z\", \"firstName\": \"user501\", \"lastName\": \"lastname21\", \"username\": \"username501\", \"email\": \"demo_user@a.com\", \"password\": \"5636\", \"posts\": [ \"5abcedbbfb5dfb236c199e81\", \"5abcededfb5dfb236c199e83\" ], \"books\": [ \"5ad3c175d4f5791f80c86742\", \"5ad3c1d6d4f5791f80c86744\" ], \"_id\": \"5b5dd84f7c124a2554381c90\", \"__v\": 0 } }",
          "type": "json"
        }
      ]
    },
    "filename": "src/router/ConsultantRouter.ts",
    "groupTitle": "Consultant",
    "sampleRequest": [
      {
        "url": "http://31.220.52.51:3000/api/v1/consultant/:_id"
      }
    ]
  },
  {
    "type": "DELETE",
    "url": "/users/:_id",
    "title": "Request  Deleted",
    "version": "0.1.0",
    "name": "deleteByToken",
    "group": "Users",
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
        "content": "https://cesarapp12.herokuapp.com/api/v1/users/5a9c4bb05e46d22f64abc15a",
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
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "http://31.220.52.51:3000/api/v1/users/:_id"
      }
    ]
  },
  {
    "type": "DELETE",
    "url": "/customers/:_id",
    "title": "Request  Deleted",
    "version": "0.1.0",
    "name": "deleteByToken",
    "group": "Users",
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
        "content": "https://cesarapp12.herokuapp.com/api/v1/users/5a9c4bb05e46d22f64abc15a",
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
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "http://31.220.52.51:3000/api/v1/customers/:_id"
      }
    ]
  },
  {
    "type": "DELETE",
    "url": "/users/:_id",
    "title": "Request  Deleted",
    "version": "0.1.0",
    "name": "deleteByToken",
    "group": "Users",
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
        "content": "https://cesarapp12.herokuapp.com/api/v1/users/5a9c4bb05e46d22f64abc15a",
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
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "http://31.220.52.51:3000/api/v1/users/:_id"
      }
    ]
  },
  {
    "type": "GET",
    "url": "/customers/",
    "title": "Request all",
    "version": "0.1.0",
    "name": "get",
    "group": "Users",
    "sampleRequest": [
      {
        "url": "http://31.220.52.51:3000/api/v1/customers/"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response a JSON-Array<user>:",
          "content": "{\"data\":[\n{\"createdAt\": \"2018-04-15T22:08:19.645Z\", \"updatedAt\": \"2018-04-15T22:08:19.645Z\", \"firstName\": \"user102\", \"lastName\": \"last102\", \"username\": \"user102\", \"email\": \"algo@a456.com\", \"password\": \"5636\", \"posts\": [ { \"timestamp\": \"2018-07-29T15:08:01.298Z\", \"title\": \"algo\", \"slug\": \"\", \"content\": \"\", \"featuredImage\": \"\", \"category\": \"c\", \"published\": false, \"_id\": \"5abbfcc0734d1d56e20469e2\" } ], \"books\": [ { \"createAt\": \"2018-04-15T21:19:18.433Z\", \"name\": \"libro2\", \"pages\": 50, \"_id\": \"5ad3c1d6d4f5791f80c86744\", \"__v\": 0 }, { \"createAt\": \"2018-04-15T21:17:41.101Z\", \"name\": \"libro1\", \"pages\": 40, \"_id\": \"5ad3c175d4f5791f80c86742\", \"__v\": 0 } ], \"_id\": \"5ad3cd5346a90e3d1c9c09a1\", \"__v\": 0 }, { \"createdAt\": \"2018-04-15T22:13:52.471Z\", \"updatedAt\": \"2018-04-15T22:13:52.471Z\", \"firstName\": \"user25\", \"lastName\": \"last25\", \"username\": \"username25\", \"email\": \"algo@a456.com\", \"password\": \"5636\", \"posts\": [ { \"timestamp\": \"2018-07-29T15:08:01.298Z\", \"title\": \"algo\", \"slug\": \"\", \"content\": \"\", \"featuredImage\": \"\", \"category\": \"c\", \"published\": false, \"_id\": \"5abbfcc0734d1d56e20469e2\" }, { \"timestamp\": \"2018-03-29T13:45:17.776Z\", \"title\": \"Post4\", \"slug\": \"post2\", \"content\": \"algo contenido\", \"featuredImage\": \"imagen\", \"category\": \"category\", \"published\": true, \"_id\": \"5abcededfb5dfb236c199e83\", \"__v\": 0 } ], \"books\": [ { \"createAt\": \"2018-04-15T21:19:18.433Z\", \"name\": \"libro2\", \"pages\": 50, \"_id\": \"5ad3c1d6d4f5791f80c86744\", \"__v\": 0 }, { \"createAt\": \"2018-04-15T21:17:41.101Z\", \"name\": \"libro1\", \"pages\": 40, \"_id\": \"5ad3c175d4f5791f80c86742\", \"__v\": 0 }, { \"createAt\": \"2018-04-15T21:19:36.520Z\", \"name\": \"libro4\", \"pages\": 150, \"_id\": \"5ad3c1e8d4f5791f80c86746\", \"__v\": 0 } ], \"_id\": \"5ad3cea0206c9611d0a7906c\", \"__v\": 0 }\n]}",
          "type": "json"
        }
      ]
    },
    "filename": "src/router/CustomersRouter.ts",
    "groupTitle": "Users"
  },
  {
    "type": "GET",
    "url": "/users/",
    "title": "Request all",
    "version": "0.1.0",
    "name": "get",
    "group": "Users",
    "sampleRequest": [
      {
        "url": "http://31.220.52.51:3000/api/v1/users/"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response a JSON-Array<user>:",
          "content": "{\"data\":[\n{\"createdAt\": \"2018-04-15T22:08:19.645Z\", \"updatedAt\": \"2018-04-15T22:08:19.645Z\", \"firstName\": \"user102\", \"lastName\": \"last102\", \"username\": \"user102\", \"email\": \"algo@a456.com\", \"password\": \"5636\", \"posts\": [ { \"timestamp\": \"2018-07-29T15:08:01.298Z\", \"title\": \"algo\", \"slug\": \"\", \"content\": \"\", \"featuredImage\": \"\", \"category\": \"c\", \"published\": false, \"_id\": \"5abbfcc0734d1d56e20469e2\" } ], \"books\": [ { \"createAt\": \"2018-04-15T21:19:18.433Z\", \"name\": \"libro2\", \"pages\": 50, \"_id\": \"5ad3c1d6d4f5791f80c86744\", \"__v\": 0 }, { \"createAt\": \"2018-04-15T21:17:41.101Z\", \"name\": \"libro1\", \"pages\": 40, \"_id\": \"5ad3c175d4f5791f80c86742\", \"__v\": 0 } ], \"_id\": \"5ad3cd5346a90e3d1c9c09a1\", \"__v\": 0 }, { \"createdAt\": \"2018-04-15T22:13:52.471Z\", \"updatedAt\": \"2018-04-15T22:13:52.471Z\", \"firstName\": \"user25\", \"lastName\": \"last25\", \"username\": \"username25\", \"email\": \"algo@a456.com\", \"password\": \"5636\", \"posts\": [ { \"timestamp\": \"2018-07-29T15:08:01.298Z\", \"title\": \"algo\", \"slug\": \"\", \"content\": \"\", \"featuredImage\": \"\", \"category\": \"c\", \"published\": false, \"_id\": \"5abbfcc0734d1d56e20469e2\" }, { \"timestamp\": \"2018-03-29T13:45:17.776Z\", \"title\": \"Post4\", \"slug\": \"post2\", \"content\": \"algo contenido\", \"featuredImage\": \"imagen\", \"category\": \"category\", \"published\": true, \"_id\": \"5abcededfb5dfb236c199e83\", \"__v\": 0 } ], \"books\": [ { \"createAt\": \"2018-04-15T21:19:18.433Z\", \"name\": \"libro2\", \"pages\": 50, \"_id\": \"5ad3c1d6d4f5791f80c86744\", \"__v\": 0 }, { \"createAt\": \"2018-04-15T21:17:41.101Z\", \"name\": \"libro1\", \"pages\": 40, \"_id\": \"5ad3c175d4f5791f80c86742\", \"__v\": 0 }, { \"createAt\": \"2018-04-15T21:19:36.520Z\", \"name\": \"libro4\", \"pages\": 150, \"_id\": \"5ad3c1e8d4f5791f80c86746\", \"__v\": 0 } ], \"_id\": \"5ad3cea0206c9611d0a7906c\", \"__v\": 0 }\n]}",
          "type": "json"
        }
      ]
    },
    "filename": "src/router/PostsRouter.ts",
    "groupTitle": "Users"
  },
  {
    "type": "GET",
    "url": "/users/",
    "title": "Request all",
    "version": "0.1.0",
    "name": "get",
    "group": "Users",
    "sampleRequest": [
      {
        "url": "http://31.220.52.51:3000/api/v1/users/"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response a JSON-Array<user>:",
          "content": "{\"data\":[\n{\"createdAt\": \"2018-04-15T22:08:19.645Z\", \"updatedAt\": \"2018-04-15T22:08:19.645Z\", \"firstName\": \"user102\", \"lastName\": \"last102\", \"username\": \"user102\", \"email\": \"algo@a456.com\", \"password\": \"5636\", \"posts\": [ { \"timestamp\": \"2018-07-29T15:08:01.298Z\", \"title\": \"algo\", \"slug\": \"\", \"content\": \"\", \"featuredImage\": \"\", \"category\": \"c\", \"published\": false, \"_id\": \"5abbfcc0734d1d56e20469e2\" } ], \"books\": [ { \"createAt\": \"2018-04-15T21:19:18.433Z\", \"name\": \"libro2\", \"pages\": 50, \"_id\": \"5ad3c1d6d4f5791f80c86744\", \"__v\": 0 }, { \"createAt\": \"2018-04-15T21:17:41.101Z\", \"name\": \"libro1\", \"pages\": 40, \"_id\": \"5ad3c175d4f5791f80c86742\", \"__v\": 0 } ], \"_id\": \"5ad3cd5346a90e3d1c9c09a1\", \"__v\": 0 }, { \"createdAt\": \"2018-04-15T22:13:52.471Z\", \"updatedAt\": \"2018-04-15T22:13:52.471Z\", \"firstName\": \"user25\", \"lastName\": \"last25\", \"username\": \"username25\", \"email\": \"algo@a456.com\", \"password\": \"5636\", \"posts\": [ { \"timestamp\": \"2018-07-29T15:08:01.298Z\", \"title\": \"algo\", \"slug\": \"\", \"content\": \"\", \"featuredImage\": \"\", \"category\": \"c\", \"published\": false, \"_id\": \"5abbfcc0734d1d56e20469e2\" }, { \"timestamp\": \"2018-03-29T13:45:17.776Z\", \"title\": \"Post4\", \"slug\": \"post2\", \"content\": \"algo contenido\", \"featuredImage\": \"imagen\", \"category\": \"category\", \"published\": true, \"_id\": \"5abcededfb5dfb236c199e83\", \"__v\": 0 } ], \"books\": [ { \"createAt\": \"2018-04-15T21:19:18.433Z\", \"name\": \"libro2\", \"pages\": 50, \"_id\": \"5ad3c1d6d4f5791f80c86744\", \"__v\": 0 }, { \"createAt\": \"2018-04-15T21:17:41.101Z\", \"name\": \"libro1\", \"pages\": 40, \"_id\": \"5ad3c175d4f5791f80c86742\", \"__v\": 0 }, { \"createAt\": \"2018-04-15T21:19:36.520Z\", \"name\": \"libro4\", \"pages\": 150, \"_id\": \"5ad3c1e8d4f5791f80c86746\", \"__v\": 0 } ], \"_id\": \"5ad3cea0206c9611d0a7906c\", \"__v\": 0 }\n]}",
          "type": "json"
        }
      ]
    },
    "filename": "src/router/TicketsRouter.ts",
    "groupTitle": "Users"
  },
  {
    "type": "GET",
    "url": "/users/:_id",
    "title": "Request by Object Id",
    "version": "0.1.0",
    "name": "getById",
    "group": "Users",
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
        "content": "https://cesarapp12.herokuapp.com/api/v1/users/5a9c4bb05e46d22f64abc15a",
        "type": "json"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://31.220.52.51:3000/api/v1/users/"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response User:",
          "content": "{\"data\": { \"createdAt\": \"2018-07-29T15:07:59.022Z\", \"updatedAt\": \"2018-07-29T15:07:59.022Z\", \"firstName\": \"user501\", \"lastName\": \"lastname2\", \"username\": \"username501\", \"email\": \"demo_user@a.com\", \"password\": \"5636\", \"posts\": [ { \"timestamp\": \"2018-03-29T13:44:27.979Z\", \"title\": \"Post1\", \"slug\": \"post1\", \"content\": \"algo contenido\", \"featuredImage\": \"imagen\", \"category\": \"category\", \"published\": false, \"_id\": \"5abcedbbfb5dfb236c199e81\", \"__v\": 0 }, { \"timestamp\": \"2018-03-29T13:45:17.776Z\", \"title\": \"Post4\", \"slug\": \"post2\", \"content\": \"algo contenido\", \"featuredImage\": \"imagen\", \"category\": \"category\", \"published\": true, \"_id\": \"5abcededfb5dfb236c199e83\", \"__v\": 0 } ], \"books\": [ { \"createAt\": \"2018-04-15T21:17:41.101Z\", \"name\": \"libro1\", \"pages\": 40, \"_id\": \"5ad3c175d4f5791f80c86742\", \"__v\": 0 }, { \"createAt\": \"2018-04-15T21:17:41.101Z\", \"name\": \"libro1\", \"pages\": 40, \"_id\": \"5ad3c175d4f5791f80c86742\", \"__v\": 0 } ], \"_id\": \"5b5dd84f7c124a2554381c90\", \"__v\": 0 } }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "updatedAt",
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
            "field": "firstName",
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
            "field": "username",
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
            "field": "password",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Books",
            "optional": false,
            "field": "books",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Post",
            "optional": false,
            "field": "post",
            "description": ""
          }
        ]
      }
    },
    "filename": "src/router/PostsRouter.ts",
    "groupTitle": "Users"
  },
  {
    "type": "GET",
    "url": "/customers/:_id",
    "title": "Request by Object Id",
    "version": "0.1.0",
    "name": "getById",
    "group": "Users",
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
        "content": "https://cesarapp12.herokuapp.com/api/v1/users/5a9c4bb05e46d22f64abc15a",
        "type": "json"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://31.220.52.51:3000/api/v1/users/"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response User:",
          "content": "{\"data\": { \"createdAt\": \"2018-07-29T15:07:59.022Z\", \"updatedAt\": \"2018-07-29T15:07:59.022Z\", \"firstName\": \"user501\", \"lastName\": \"lastname2\", \"username\": \"username501\", \"email\": \"demo_user@a.com\", \"password\": \"5636\", \"posts\": [ { \"timestamp\": \"2018-03-29T13:44:27.979Z\", \"title\": \"Post1\", \"slug\": \"post1\", \"content\": \"algo contenido\", \"featuredImage\": \"imagen\", \"category\": \"category\", \"published\": false, \"_id\": \"5abcedbbfb5dfb236c199e81\", \"__v\": 0 }, { \"timestamp\": \"2018-03-29T13:45:17.776Z\", \"title\": \"Post4\", \"slug\": \"post2\", \"content\": \"algo contenido\", \"featuredImage\": \"imagen\", \"category\": \"category\", \"published\": true, \"_id\": \"5abcededfb5dfb236c199e83\", \"__v\": 0 } ], \"books\": [ { \"createAt\": \"2018-04-15T21:17:41.101Z\", \"name\": \"libro1\", \"pages\": 40, \"_id\": \"5ad3c175d4f5791f80c86742\", \"__v\": 0 }, { \"createAt\": \"2018-04-15T21:17:41.101Z\", \"name\": \"libro1\", \"pages\": 40, \"_id\": \"5ad3c175d4f5791f80c86742\", \"__v\": 0 } ], \"_id\": \"5b5dd84f7c124a2554381c90\", \"__v\": 0 } }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "updatedAt",
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
            "field": "firstName",
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
            "field": "username",
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
            "field": "password",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Books",
            "optional": false,
            "field": "books",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Post",
            "optional": false,
            "field": "post",
            "description": ""
          }
        ]
      }
    },
    "filename": "src/router/CustomersRouter.ts",
    "groupTitle": "Users"
  },
  {
    "type": "GET",
    "url": "/users/:_id",
    "title": "Request by Object Id",
    "version": "0.1.0",
    "name": "getById",
    "group": "Users",
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
        "content": "https://cesarapp12.herokuapp.com/api/v1/users/5a9c4bb05e46d22f64abc15a",
        "type": "json"
      }
    ],
    "sampleRequest": [
      {
        "url": "http://31.220.52.51:3000/api/v1/users/"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response User:",
          "content": "{\"data\": { \"createdAt\": \"2018-07-29T15:07:59.022Z\", \"updatedAt\": \"2018-07-29T15:07:59.022Z\", \"firstName\": \"user501\", \"lastName\": \"lastname2\", \"username\": \"username501\", \"email\": \"demo_user@a.com\", \"password\": \"5636\", \"posts\": [ { \"timestamp\": \"2018-03-29T13:44:27.979Z\", \"title\": \"Post1\", \"slug\": \"post1\", \"content\": \"algo contenido\", \"featuredImage\": \"imagen\", \"category\": \"category\", \"published\": false, \"_id\": \"5abcedbbfb5dfb236c199e81\", \"__v\": 0 }, { \"timestamp\": \"2018-03-29T13:45:17.776Z\", \"title\": \"Post4\", \"slug\": \"post2\", \"content\": \"algo contenido\", \"featuredImage\": \"imagen\", \"category\": \"category\", \"published\": true, \"_id\": \"5abcededfb5dfb236c199e83\", \"__v\": 0 } ], \"books\": [ { \"createAt\": \"2018-04-15T21:17:41.101Z\", \"name\": \"libro1\", \"pages\": 40, \"_id\": \"5ad3c175d4f5791f80c86742\", \"__v\": 0 }, { \"createAt\": \"2018-04-15T21:17:41.101Z\", \"name\": \"libro1\", \"pages\": 40, \"_id\": \"5ad3c175d4f5791f80c86742\", \"__v\": 0 } ], \"_id\": \"5b5dd84f7c124a2554381c90\", \"__v\": 0 } }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "updatedAt",
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
            "field": "firstName",
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
            "field": "username",
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
            "field": "password",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Books",
            "optional": false,
            "field": "books",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Post",
            "optional": false,
            "field": "post",
            "description": ""
          }
        ]
      }
    },
    "filename": "src/router/TicketsRouter.ts",
    "groupTitle": "Users"
  },
  {
    "type": "POST",
    "url": "/customers/",
    "title": "Request New",
    "version": "0.1.0",
    "name": "post",
    "group": "Users",
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
            "field": "lastName",
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
            "field": "totalHours",
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
            "field": "workArea",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\"firstName\": \"user50\", \"lastName\": \"lastname2\", \"username\": \"username50\", \"email\": \"demo_user@a.com\", \"password\": \"5636\",\"posts\": [\"5abcedbbfb5dfb236c199e81\",\"5abcededfb5dfb236c199e83\"],\"books\": [\"5ad3c175d4f5791f80c86742\",\"5ad3c1d6d4f5791f80c86744\"] }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response Created User:",
          "content": "{\"data\": { \"createdAt\": \"2018-07-29T15:07:59.022Z\", \"updatedAt\": \"2018-07-29T15:07:59.022Z\", \"firstName\": \"user501\", \"lastName\": \"lastname2\", \"username\": \"username501\", \"email\": \"demo_user@a.com\", \"password\": \"5636\", \"posts\": [ \"5abcedbbfb5dfb236c199e81\", \"5abcededfb5dfb236c199e83\" ], \"books\": [ \"5ad3c175d4f5791f80c86742\", \"5ad3c175d4f5791f80c86742\" ], \"_id\": \"5b5dd84f7c124a2554381c90\", \"__v\": 0 } }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "updatedAt",
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
            "field": "firstName",
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
            "field": "username",
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
            "field": "password",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Books",
            "optional": false,
            "field": "books",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Post",
            "optional": false,
            "field": "post",
            "description": ""
          }
        ]
      }
    },
    "filename": "src/router/CustomersRouter.ts",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "http://31.220.52.51:3000/api/v1/customers/"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/users/",
    "title": "Request New",
    "version": "0.1.0",
    "name": "post",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firstName",
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
            "field": "username",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
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
            "type": "Books",
            "optional": false,
            "field": "books",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "book._id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Posts",
            "optional": false,
            "field": "posts",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>•\tAtendiendo. •\tCerrado. Pendiente</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\"firstName\": \"user50\", \"lastName\": \"lastname2\", \"username\": \"username50\", \"email\": \"demo_user@a.com\", \"password\": \"5636\",\"posts\": [\"5abcedbbfb5dfb236c199e81\",\"5abcededfb5dfb236c199e83\"],\"books\": [\"5ad3c175d4f5791f80c86742\",\"5ad3c1d6d4f5791f80c86744\"] }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response Created User:",
          "content": "{\"data\": { \"createdAt\": \"2018-07-29T15:07:59.022Z\", \"updatedAt\": \"2018-07-29T15:07:59.022Z\", \"firstName\": \"user501\", \"lastName\": \"lastname2\", \"username\": \"username501\", \"email\": \"demo_user@a.com\", \"password\": \"5636\", \"posts\": [ \"5abcedbbfb5dfb236c199e81\", \"5abcededfb5dfb236c199e83\" ], \"books\": [ \"5ad3c175d4f5791f80c86742\", \"5ad3c175d4f5791f80c86742\" ], \"_id\": \"5b5dd84f7c124a2554381c90\", \"__v\": 0 } }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "updatedAt",
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
            "field": "firstName",
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
            "field": "username",
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
            "field": "password",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Books",
            "optional": false,
            "field": "books",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Post",
            "optional": false,
            "field": "post",
            "description": ""
          }
        ]
      }
    },
    "filename": "src/router/PostsRouter.ts",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "http://31.220.52.51:3000/api/v1/users/"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/users/",
    "title": "Request New",
    "version": "0.1.0",
    "name": "post",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firstName",
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
            "field": "username",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
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
            "type": "Books",
            "optional": false,
            "field": "books",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "book._id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Posts",
            "optional": false,
            "field": "posts",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>•\tAtendiendo. •\tCerrado. Pendiente</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\"firstName\": \"user50\", \"lastName\": \"lastname2\", \"username\": \"username50\", \"email\": \"demo_user@a.com\", \"password\": \"5636\",\"posts\": [\"5abcedbbfb5dfb236c199e81\",\"5abcededfb5dfb236c199e83\"],\"books\": [\"5ad3c175d4f5791f80c86742\",\"5ad3c1d6d4f5791f80c86744\"] }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response Created User:",
          "content": "{\"data\": { \"createdAt\": \"2018-07-29T15:07:59.022Z\", \"updatedAt\": \"2018-07-29T15:07:59.022Z\", \"firstName\": \"user501\", \"lastName\": \"lastname2\", \"username\": \"username501\", \"email\": \"demo_user@a.com\", \"password\": \"5636\", \"posts\": [ \"5abcedbbfb5dfb236c199e81\", \"5abcededfb5dfb236c199e83\" ], \"books\": [ \"5ad3c175d4f5791f80c86742\", \"5ad3c175d4f5791f80c86742\" ], \"_id\": \"5b5dd84f7c124a2554381c90\", \"__v\": 0 } }",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": true,
            "field": "updatedAt",
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
            "field": "firstName",
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
            "field": "username",
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
            "field": "password",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Books",
            "optional": false,
            "field": "books",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Post",
            "optional": false,
            "field": "post",
            "description": ""
          }
        ]
      }
    },
    "filename": "src/router/TicketsRouter.ts",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "http://31.220.52.51:3000/api/v1/users/"
      }
    ]
  },
  {
    "type": "PUT",
    "url": "/users/:_id",
    "title": "Request Update",
    "version": "0.1.0",
    "name": "put",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>Must be placed as QueryParam</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "firstName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "lastName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "username",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "password",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Posts",
            "optional": true,
            "field": "posts",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "post._id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Books",
            "optional": true,
            "field": "books",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "book._id",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{ \"lastName\": \"lastname21\",\"books\": [ \"5ad3c1d6d4f5791f80c86744\" ] }",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "https://cesarapp12.herokuapp.com/api/v1/users/5a9c4bb05e46d22f64abc15a",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{ \"data\": { \"createdAt\": \"2018-07-29T15:07:59.022Z\", \"updatedAt\": \"2018-07-29T15:07:59.022Z\", \"firstName\": \"user501\", \"lastName\": \"lastname21\", \"username\": \"username501\", \"email\": \"demo_user@a.com\", \"password\": \"5636\", \"posts\": [ \"5abcedbbfb5dfb236c199e81\", \"5abcededfb5dfb236c199e83\" ], \"books\": [ \"5ad3c175d4f5791f80c86742\", \"5ad3c1d6d4f5791f80c86744\" ], \"_id\": \"5b5dd84f7c124a2554381c90\", \"__v\": 0 } }",
          "type": "json"
        }
      ]
    },
    "filename": "src/router/PostsRouter.ts",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "http://31.220.52.51:3000/api/v1/users/:_id"
      }
    ]
  },
  {
    "type": "PUT",
    "url": "/users/:_id",
    "title": "Request Update",
    "version": "0.1.0",
    "name": "put",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>Must be placed as QueryParam</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "firstName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "lastName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "username",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "password",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Posts",
            "optional": true,
            "field": "posts",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "post._id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Books",
            "optional": true,
            "field": "books",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "book._id",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{ \"lastName\": \"lastname21\",\"books\": [ \"5ad3c1d6d4f5791f80c86744\" ] }",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "https://cesarapp12.herokuapp.com/api/v1/users/5a9c4bb05e46d22f64abc15a",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{ \"data\": { \"createdAt\": \"2018-07-29T15:07:59.022Z\", \"updatedAt\": \"2018-07-29T15:07:59.022Z\", \"firstName\": \"user501\", \"lastName\": \"lastname21\", \"username\": \"username501\", \"email\": \"demo_user@a.com\", \"password\": \"5636\", \"posts\": [ \"5abcedbbfb5dfb236c199e81\", \"5abcededfb5dfb236c199e83\" ], \"books\": [ \"5ad3c175d4f5791f80c86742\", \"5ad3c1d6d4f5791f80c86744\" ], \"_id\": \"5b5dd84f7c124a2554381c90\", \"__v\": 0 } }",
          "type": "json"
        }
      ]
    },
    "filename": "src/router/TicketsRouter.ts",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "http://31.220.52.51:3000/api/v1/users/:_id"
      }
    ]
  },
  {
    "type": "PUT",
    "url": "/customers/:_id",
    "title": "Request Update",
    "version": "0.1.0",
    "name": "put",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "_id",
            "description": "<p>Must be placed as QueryParam</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "firstName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "lastName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "username",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "password",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Posts",
            "optional": true,
            "field": "posts",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "post._id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Books",
            "optional": true,
            "field": "books",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "ObjectId[]",
            "optional": false,
            "field": "book._id",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{ \"lastName\": \"lastname21\",\"books\": [ \"5ad3c1d6d4f5791f80c86744\" ] }",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "https://cesarapp12.herokuapp.com/api/v1/users/5a9c4bb05e46d22f64abc15a",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{ \"data\": { \"createdAt\": \"2018-07-29T15:07:59.022Z\", \"updatedAt\": \"2018-07-29T15:07:59.022Z\", \"firstName\": \"user501\", \"lastName\": \"lastname21\", \"username\": \"username501\", \"email\": \"demo_user@a.com\", \"password\": \"5636\", \"posts\": [ \"5abcedbbfb5dfb236c199e81\", \"5abcededfb5dfb236c199e83\" ], \"books\": [ \"5ad3c175d4f5791f80c86742\", \"5ad3c1d6d4f5791f80c86744\" ], \"_id\": \"5b5dd84f7c124a2554381c90\", \"__v\": 0 } }",
          "type": "json"
        }
      ]
    },
    "filename": "src/router/CustomersRouter.ts",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "http://31.220.52.51:3000/api/v1/customers/:_id"
      }
    ]
  }
] });
