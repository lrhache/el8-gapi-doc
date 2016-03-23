define({ "api": [  {    "type": "get",    "url": "/physician/:npi",    "title": "2. Read data of a Physician",    "version": "0.1.0",    "name": "GetPhysician",    "group": "Physician",    "description": "<p>Retrieve the info from a single physician</p>",    "examples": [      {        "title": "Example usage",        "content": "curl -i https://app.elationemr.com/graph/1.0/physician/1356364871/",        "type": "curl"      }    ],    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "npi",            "description": "<p>The Physician NPI</p>"          }        ]      }    },    "filename": "hippo/elation/graph_api/apidoc.js",    "groupTitle": "Physician",    "success": {      "fields": {        "Success 200 - Response": [          {            "group": "Success 200 - Response",            "type": "object",            "optional": false,            "field": "self",            "description": "<p>Object containing the requested physician</p>"          },          {            "group": "Success 200 - Response",            "type": "object[]",            "optional": false,            "field": "data",            "description": "<p>List of results</p>"          },          {            "group": "Success 200 - Response",            "type": "Number",            "optional": false,            "field": "total_results",            "description": "<p>Number of results returned</p>"          }        ],        "Success 200 - Physician": [          {            "group": "Success 200 - Physician",            "type": "Number",            "optional": false,            "field": "npi",            "description": "<p>NPI of the phyisian</p>"          },          {            "group": "Success 200 - Physician",            "type": "String",            "optional": false,            "field": "first_name",            "description": "<p>First name of the phyisian</p>"          },          {            "group": "Success 200 - Physician",            "type": "String",            "optional": false,            "field": "last_name",            "description": "<p>Last name of the physician</p>"          },          {            "group": "Success 200 - Physician",            "type": "String",            "optional": false,            "field": "credentials",            "description": "<p>Credentials of the physician, if available</p>"          },          {            "group": "Success 200 - Physician",            "type": "String",            "optional": false,            "field": "app_type",            "description": "<p>The type of subscription with Elation</p>"          },          {            "group": "Success 200 - Physician",            "type": "String",            "optional": false,            "field": "contact_type",            "description": "<p>The type of user it references to (should always be physician)</p>"          },          {            "group": "Success 200 - Physician",            "type": "Object[]",            "optional": false,            "field": "practices",            "description": "<p>List of practices the physician practice at</p>"          },          {            "group": "Success 200 - Physician",            "type": "String",            "optional": false,            "field": "practices.name",            "description": "<p>Name of the practice, if available</p>"          },          {            "group": "Success 200 - Physician",            "type": "Object[]",            "optional": false,            "field": "practices.locations",            "description": "<p>List of locations where the physician practice at</p>"          },          {            "group": "Success 200 - Physician",            "type": "Float",            "optional": false,            "field": "practices.locations.lat",            "description": "<p>Latitude</p>"          },          {            "group": "Success 200 - Physician",            "type": "Float",            "optional": false,            "field": "practices.locations.lon",            "description": "<p>Longitude</p>"          },          {            "group": "Success 200 - Physician",            "type": "String",            "optional": false,            "field": "practices.locations.address",            "description": "<p>Address</p>"          },          {            "group": "Success 200 - Physician",            "type": "String",            "optional": false,            "field": "practices.locations.suite",            "description": "<p>Suite</p>"          },          {            "group": "Success 200 - Physician",            "type": "String",            "optional": false,            "field": "practices.locations.city",            "description": "<p>City</p>"          },          {            "group": "Success 200 - Physician",            "type": "String",            "optional": false,            "field": "practices.locations.state",            "description": "<p>State</p>"          },          {            "group": "Success 200 - Physician",            "type": "String",            "optional": false,            "field": "practices.locations.zip",            "description": "<p>Zip code</p>"          },          {            "group": "Success 200 - Physician",            "type": "Object",            "optional": false,            "field": "specialties",            "description": "<p>Specialties info for the physician</p>"          },          {            "group": "Success 200 - Physician",            "type": "Object",            "optional": false,            "field": "specialties.specialty",            "description": "<p>Specialty info for the physician</p>"          },          {            "group": "Success 200 - Physician",            "type": "Number",            "optional": false,            "field": "specialties.specialty.id",            "description": "<p>Elation specialty ID</p>"          },          {            "group": "Success 200 - Physician",            "type": "String",            "optional": false,            "field": "specialties.specialty.name",            "description": "<p>Elation specialty name</p>"          },          {            "group": "Success 200 - Physician",            "type": "Object",            "optional": false,            "field": "specialties.category",            "description": "<p>Category info for the physician</p>"          },          {            "group": "Success 200 - Physician",            "type": "Number",            "optional": false,            "field": "specialties.category.id",            "description": "<p>Elation category ID</p>"          },          {            "group": "Success 200 - Physician",            "type": "String",            "optional": false,            "field": "specialties.category.name",            "description": "<p>Elation category name</p>"          },          {            "group": "Success 200 - Physician",            "type": "Object",            "optional": false,            "field": "stats",            "description": "<p>Statistics about this users</p>"          },          {            "group": "Success 200 - Physician",            "type": "Object",            "optional": false,            "field": "stats.letters",            "description": "<p>Physician's usage of letters</p>"          },          {            "group": "Success 200 - Physician",            "type": "Number",            "optional": false,            "field": "stats.letters.sent",            "description": "<p>Number of letters sent</p>"          },          {            "group": "Success 200 - Physician",            "type": "Number",            "optional": false,            "field": "stats.letters.received",            "description": "<p>Number of letters received</p>"          },          {            "group": "Success 200 - Physician",            "type": "Datetime",            "optional": false,            "field": "stats.letters.last",            "description": "<p>Date/time last letter was sent or received by the physician</p>"          },          {            "group": "Success 200 - Physician",            "type": "Object",            "optional": false,            "field": "stats.comments",            "description": "<p>Physician's usage of comments on letters</p>"          },          {            "group": "Success 200 - Physician",            "type": "Number",            "optional": false,            "field": "stats.comments.wrote",            "description": "<p>Number of comments the physician has written</p>"          },          {            "group": "Success 200 - Physician",            "type": "Datetime",            "optional": false,            "field": "stats.comments.last",            "description": "<p>Datetime last comment was written by the physician</p>"          },          {            "group": "Success 200 - Physician",            "type": "Object",            "optional": false,            "field": "stats.connections",            "description": "<p>Physician's connections within Elation network</p>"          },          {            "group": "Success 200 - Physician",            "type": "Number",            "optional": false,            "field": "stats.connections.total",            "description": "<p>Total of connections</p>"          },          {            "group": "Success 200 - Physician",            "type": "Number",            "optional": false,            "field": "stats.connections.emr_users",            "description": "<p>Total of connections with Elation's users</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  \"npi\": 1000001,\n  \"first_name\": \"Dennis\",\n  \"last_name\": \"Fong\",\n  \"credentials\": \"MD\",\n  \"app_type\": \"emr\",\n  \"contact_type\": \"physician\",\n  \"specialties\": {\n    \"specialty\" : {\n      \"id\": 1,\n      \"name\": \"family medicine\"\n    },\n    \"category\": {\n      \"id\": 12345,\n      \"name\": \"internal medicine\"\n    }\n  },\n \"practices\": [{\n    \"name\": \"Dennis Fong M.D\",\n    \"locations\": [{\n      \"city\": \"Walnut Creek\",\n      \"zip\": \"94598\",\n      \"lon\": -122.0433385,\n      \"state\": \"CA\",\n      \"address\": \"106 La Casa Via\",\n      \"lat\": 37.9121849,\n      \"suite\": \"Ste. 110\"\n    }, {...}]\n  }, {...}], \n  \"stats\": {\n    \"connections\": {\n      \"total\": 2, \n      \"emr_users\": 2\n    }, \n    \"letters\": {\n      \"sent\": 0,\n      \"received\": 1, \n      \"last\": \"2013-10-23T21:24:53\"\n    }, \n    \"comments\": {\n      \"wrote\": 0,\n      \"last\": \"2013-10-24T09:36:21\"\n    }\n  },\n  stats_relation\": {\n    \"letters\": {\n      \"sent\": 0,\n      \"received\": 1, \n      \"last\": \"2013-10-23T21:24:53\"\n    },\n    \"comments\": {\n      \"wrote\": 0,\n      \"last\": \"\"\n    }\n    \"shared_patients\": 20,\n    \"mutual_connections\": 0,\n  }\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "NPINotFound",            "description": "<p>The requested physician wasn't found</p>"          }        ]      },      "examples": [        {          "title": "Response (example):",          "content": "HTTP/1.1 404 Not Found\n{\n    \"error\": \"NPINotFound\"\n}",          "type": "json"        }      ]    }  },  {    "type": "get",    "url": "/physician/:npi/connections",    "title": "3. Physician's connections",    "version": "0.1.0",    "name": "GetPhysicianRelations",    "group": "Physician",    "description": "<p>Retrieve the physician connections to other physicians</p>",    "examples": [      {        "title": "Example usage",        "content": "curl -i http://localhost:8009/graph/1.0/physician/1356364871/connections/?distance=2\ncurl -i https://app.elationemr.com/graph/1.0/physician/1356364871/connections/?bbox=-122.099975,-121.980471,37.842425,37.946022",        "type": "curl"      }    ],    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "npi",            "description": "<p>The Physician NPI</p>"          }        ],        "Query": [          {            "group": "Query",            "type": "Number",            "optional": true,            "field": "distance",            "description": "<p>Restrict the search radius (in KM)</p>"          },          {            "group": "Query",            "type": "String",            "optional": true,            "field": "bbox",            "description": "<p>Bounding box search. Format: min_lon, max_lon, min_lat, max_lat</p>"          }        ]      }    },    "filename": "hippo/elation/graph_api/apidoc.js",    "groupTitle": "Physician",    "success": {      "fields": {        "Success 200 - Response": [          {            "group": "Success 200 - Response",            "type": "object",            "optional": false,            "field": "self",            "description": "<p>Object containing the requested physician</p>"          },          {            "group": "Success 200 - Response",            "type": "object[]",            "optional": false,            "field": "data",            "description": "<p>List of results</p>"          },          {            "group": "Success 200 - Response",            "type": "Number",            "optional": false,            "field": "total_results",            "description": "<p>Number of results returned</p>"          }        ],        "Success 200 - Physician": [          {            "group": "Success 200 - Physician",            "type": "Number",            "optional": false,            "field": "npi",            "description": "<p>NPI of the phyisian</p>"          },          {            "group": "Success 200 - Physician",            "type": "String",            "optional": false,            "field": "first_name",            "description": "<p>First name of the phyisian</p>"          },          {            "group": "Success 200 - Physician",            "type": "String",            "optional": false,            "field": "last_name",            "description": "<p>Last name of the physician</p>"          },          {            "group": "Success 200 - Physician",            "type": "String",            "optional": false,            "field": "credentials",            "description": "<p>Credentials of the physician, if available</p>"          },          {            "group": "Success 200 - Physician",            "type": "String",            "optional": false,            "field": "app_type",            "description": "<p>The type of subscription with Elation</p>"          },          {            "group": "Success 200 - Physician",            "type": "String",            "optional": false,            "field": "contact_type",            "description": "<p>The type of user it references to (should always be physician)</p>"          },          {            "group": "Success 200 - Physician",            "type": "Object[]",            "optional": false,            "field": "practices",            "description": "<p>List of practices the physician practice at</p>"          },          {            "group": "Success 200 - Physician",            "type": "String",            "optional": false,            "field": "practices.name",            "description": "<p>Name of the practice, if available</p>"          },          {            "group": "Success 200 - Physician",            "type": "Object[]",            "optional": false,            "field": "practices.locations",            "description": "<p>List of locations where the physician practice at</p>"          },          {            "group": "Success 200 - Physician",            "type": "Float",            "optional": false,            "field": "practices.locations.lat",            "description": "<p>Latitude</p>"          },          {            "group": "Success 200 - Physician",            "type": "Float",            "optional": false,            "field": "practices.locations.lon",            "description": "<p>Longitude</p>"          },          {            "group": "Success 200 - Physician",            "type": "String",            "optional": false,            "field": "practices.locations.address",            "description": "<p>Address</p>"          },          {            "group": "Success 200 - Physician",            "type": "String",            "optional": false,            "field": "practices.locations.suite",            "description": "<p>Suite</p>"          },          {            "group": "Success 200 - Physician",            "type": "String",            "optional": false,            "field": "practices.locations.city",            "description": "<p>City</p>"          },          {            "group": "Success 200 - Physician",            "type": "String",            "optional": false,            "field": "practices.locations.state",            "description": "<p>State</p>"          },          {            "group": "Success 200 - Physician",            "type": "String",            "optional": false,            "field": "practices.locations.zip",            "description": "<p>Zip code</p>"          },          {            "group": "Success 200 - Physician",            "type": "Object",            "optional": false,            "field": "specialties",            "description": "<p>Specialties info for the physician</p>"          },          {            "group": "Success 200 - Physician",            "type": "Object",            "optional": false,            "field": "specialties.specialty",            "description": "<p>Specialty info for the physician</p>"          },          {            "group": "Success 200 - Physician",            "type": "Number",            "optional": false,            "field": "specialties.specialty.id",            "description": "<p>Elation specialty ID</p>"          },          {            "group": "Success 200 - Physician",            "type": "String",            "optional": false,            "field": "specialties.specialty.name",            "description": "<p>Elation specialty name</p>"          },          {            "group": "Success 200 - Physician",            "type": "Object",            "optional": false,            "field": "specialties.category",            "description": "<p>Category info for the physician</p>"          },          {            "group": "Success 200 - Physician",            "type": "Number",            "optional": false,            "field": "specialties.category.id",            "description": "<p>Elation category ID</p>"          },          {            "group": "Success 200 - Physician",            "type": "String",            "optional": false,            "field": "specialties.category.name",            "description": "<p>Elation category name</p>"          },          {            "group": "Success 200 - Physician",            "type": "Object",            "optional": false,            "field": "stats",            "description": "<p>Statistics about this users</p>"          },          {            "group": "Success 200 - Physician",            "type": "Object",            "optional": false,            "field": "stats.letters",            "description": "<p>Physician's usage of letters</p>"          },          {            "group": "Success 200 - Physician",            "type": "Number",            "optional": false,            "field": "stats.letters.sent",            "description": "<p>Number of letters sent</p>"          },          {            "group": "Success 200 - Physician",            "type": "Number",            "optional": false,            "field": "stats.letters.received",            "description": "<p>Number of letters received</p>"          },          {            "group": "Success 200 - Physician",            "type": "Datetime",            "optional": false,            "field": "stats.letters.last",            "description": "<p>Date/time last letter was sent or received by the physician</p>"          },          {            "group": "Success 200 - Physician",            "type": "Object",            "optional": false,            "field": "stats.comments",            "description": "<p>Physician's usage of comments on letters</p>"          },          {            "group": "Success 200 - Physician",            "type": "Number",            "optional": false,            "field": "stats.comments.wrote",            "description": "<p>Number of comments the physician has written</p>"          },          {            "group": "Success 200 - Physician",            "type": "Datetime",            "optional": false,            "field": "stats.comments.last",            "description": "<p>Datetime last comment was written by the physician</p>"          },          {            "group": "Success 200 - Physician",            "type": "Object",            "optional": false,            "field": "stats.connections",            "description": "<p>Physician's connections within Elation network</p>"          },          {            "group": "Success 200 - Physician",            "type": "Number",            "optional": false,            "field": "stats.connections.total",            "description": "<p>Total of connections</p>"          },          {            "group": "Success 200 - Physician",            "type": "Number",            "optional": false,            "field": "stats.connections.emr_users",            "description": "<p>Total of connections with Elation's users</p>"          }        ],        "Success 200 - One-One relation": [          {            "group": "Success 200 - One-One relation",            "type": "Object",            "optional": false,            "field": "stats_relation",            "description": "<p>(optional) Statistics of interaction between the physician and the connection</p>"          },          {            "group": "Success 200 - One-One relation",            "type": "Object",            "optional": false,            "field": "stats_relation.letters",            "description": "<p>Interactions by letters between the two physicians</p>"          },          {            "group": "Success 200 - One-One relation",            "type": "Number",            "optional": false,            "field": "stats_relation.letters.sent",            "description": "<p>Number of letters the connection has sent to the physician</p>"          },          {            "group": "Success 200 - One-One relation",            "type": "Number",            "optional": false,            "field": "stats_relation.letters.received",            "description": "<p>Number of letters the connection has received from the physician</p>"          },          {            "group": "Success 200 - One-One relation",            "type": "Datetime",            "optional": false,            "field": "stats_relation.letters.last",            "description": "<p>Date/time of last letter exchanged</p>"          },          {            "group": "Success 200 - One-One relation",            "type": "Object",            "optional": false,            "field": "stats_relation.comments",            "description": "<p>Comments exchanged between the two physicians</p>"          },          {            "group": "Success 200 - One-One relation",            "type": "Number",            "optional": false,            "field": "stats_relation.comments.wrote",            "description": "<p>Number of comments the connection has written on a letter received or sent</p>"          },          {            "group": "Success 200 - One-One relation",            "type": "Datetime",            "optional": false,            "field": "stats_relation.comments.last",            "description": "<p>Date/time of last comment written by the connection</p>"          },          {            "group": "Success 200 - One-One relation",            "type": "Number",            "optional": false,            "field": "stats_relation.shared_patients",            "description": "<p>Number of shared patients between the connection and the physician</p>"          },          {            "group": "Success 200 - One-One relation",            "type": "Number",            "optional": false,            "field": "stats_relation.mutual_connections",            "description": "<p>Number of connections (physicians) the connection and the physician have in commun</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  \"npi\": 1000001,\n  \"first_name\": \"Dennis\",\n  \"last_name\": \"Fong\",\n  \"credentials\": \"MD\",\n  \"app_type\": \"emr\",\n  \"contact_type\": \"physician\",\n  \"specialties\": {\n    \"specialty\" : {\n      \"id\": 1,\n      \"name\": \"family medicine\"\n    },\n    \"category\": {\n      \"id\": 12345,\n      \"name\": \"internal medicine\"\n    }\n  },\n \"practices\": [{\n    \"name\": \"Dennis Fong M.D\",\n    \"locations\": [{\n      \"city\": \"Walnut Creek\",\n      \"zip\": \"94598\",\n      \"lon\": -122.0433385,\n      \"state\": \"CA\",\n      \"address\": \"106 La Casa Via\",\n      \"lat\": 37.9121849,\n      \"suite\": \"Ste. 110\"\n    }, {...}]\n  }, {...}], \n  \"stats\": {\n    \"connections\": {\n      \"total\": 2, \n      \"emr_users\": 2\n    }, \n    \"letters\": {\n      \"sent\": 0,\n      \"received\": 1, \n      \"last\": \"2013-10-23T21:24:53\"\n    }, \n    \"comments\": {\n      \"wrote\": 0,\n      \"last\": \"2013-10-24T09:36:21\"\n    }\n  },\n  stats_relation\": {\n    \"letters\": {\n      \"sent\": 0,\n      \"received\": 1, \n      \"last\": \"2013-10-23T21:24:53\"\n    },\n    \"comments\": {\n      \"wrote\": 0,\n      \"last\": \"\"\n    }\n    \"shared_patients\": 20,\n    \"mutual_connections\": 0,\n  }\n}",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "NPINotFound",            "description": "<p>The requested physician wasn't found</p>"          }        ]      },      "examples": [        {          "title": "Response (example):",          "content": "HTTP/1.1 404 Not Found\n{\n    \"error\": \"NPINotFound\"\n}",          "type": "json"        }      ]    }  },  {    "type": "get",    "url": "/physician",    "title": "1. Physician search",    "version": "0.1.0",    "name": "GetPhysicians",    "group": "Physician",    "description": "<p>Search for physicians You must specify one filter (latlon, bbox, distance) to limit the results. For now, we only return 1000 results.</p>",    "examples": [      {        "title": "Example usage",        "content": "curl -i https://app.elationemr.com/graph/1.0/physician/?distance=100&latlon=37.9121849,-122.0433385\ncurl -i https://app.elationemr.com/graph/1.0/physician/?bbox=-122.099975,-121.980471,37.842425,37.946022",        "type": "curl"      }    ],    "parameter": {      "fields": {        "Query": [          {            "group": "Query",            "type": "String",            "optional": true,            "field": "latlon",            "description": "<p>Latitude and longitude to start the search at (separated by a coma)</p>"          },          {            "group": "Query",            "type": "String",            "optional": true,            "field": "bbox",            "description": "<p>Bounding box search. Format: min_lon, max_lon, min_lat, max_lat</p>"          },          {            "group": "Query",            "type": "Number",            "optional": true,            "field": "distance",            "description": "<p>Restrict the search radius (in KM)</p>"          }        ]      }    },    "filename": "hippo/elation/graph_api/apidoc.js",    "groupTitle": "Physician",    "success": {      "fields": {        "Success 200 - Response": [          {            "group": "Success 200 - Response",            "type": "object",            "optional": false,            "field": "self",            "description": "<p>Object containing the requested physician</p>"          },          {            "group": "Success 200 - Response",            "type": "object[]",            "optional": false,            "field": "data",            "description": "<p>List of results</p>"          },          {            "group": "Success 200 - Response",            "type": "Number",            "optional": false,            "field": "total_results",            "description": "<p>Number of results returned</p>"          }        ],        "Success 200 - Physician": [          {            "group": "Success 200 - Physician",            "type": "Number",            "optional": false,            "field": "npi",            "description": "<p>NPI of the phyisian</p>"          },          {            "group": "Success 200 - Physician",            "type": "String",            "optional": false,            "field": "first_name",            "description": "<p>First name of the phyisian</p>"          },          {            "group": "Success 200 - Physician",            "type": "String",            "optional": false,            "field": "last_name",            "description": "<p>Last name of the physician</p>"          },          {            "group": "Success 200 - Physician",            "type": "String",            "optional": false,            "field": "credentials",            "description": "<p>Credentials of the physician, if available</p>"          },          {            "group": "Success 200 - Physician",            "type": "String",            "optional": false,            "field": "app_type",            "description": "<p>The type of subscription with Elation</p>"          },          {            "group": "Success 200 - Physician",            "type": "String",            "optional": false,            "field": "contact_type",            "description": "<p>The type of user it references to (should always be physician)</p>"          },          {            "group": "Success 200 - Physician",            "type": "Object[]",            "optional": false,            "field": "practices",            "description": "<p>List of practices the physician practice at</p>"          },          {            "group": "Success 200 - Physician",            "type": "String",            "optional": false,            "field": "practices.name",            "description": "<p>Name of the practice, if available</p>"          },          {            "group": "Success 200 - Physician",            "type": "Object[]",            "optional": false,            "field": "practices.locations",            "description": "<p>List of locations where the physician practice at</p>"          },          {            "group": "Success 200 - Physician",            "type": "Float",            "optional": false,            "field": "practices.locations.lat",            "description": "<p>Latitude</p>"          },          {            "group": "Success 200 - Physician",            "type": "Float",            "optional": false,            "field": "practices.locations.lon",            "description": "<p>Longitude</p>"          },          {            "group": "Success 200 - Physician",            "type": "String",            "optional": false,            "field": "practices.locations.address",            "description": "<p>Address</p>"          },          {            "group": "Success 200 - Physician",            "type": "String",            "optional": false,            "field": "practices.locations.suite",            "description": "<p>Suite</p>"          },          {            "group": "Success 200 - Physician",            "type": "String",            "optional": false,            "field": "practices.locations.city",            "description": "<p>City</p>"          },          {            "group": "Success 200 - Physician",            "type": "String",            "optional": false,            "field": "practices.locations.state",            "description": "<p>State</p>"          },          {            "group": "Success 200 - Physician",            "type": "String",            "optional": false,            "field": "practices.locations.zip",            "description": "<p>Zip code</p>"          },          {            "group": "Success 200 - Physician",            "type": "Object",            "optional": false,            "field": "specialties",            "description": "<p>Specialties info for the physician</p>"          },          {            "group": "Success 200 - Physician",            "type": "Object",            "optional": false,            "field": "specialties.specialty",            "description": "<p>Specialty info for the physician</p>"          },          {            "group": "Success 200 - Physician",            "type": "Number",            "optional": false,            "field": "specialties.specialty.id",            "description": "<p>Elation specialty ID</p>"          },          {            "group": "Success 200 - Physician",            "type": "String",            "optional": false,            "field": "specialties.specialty.name",            "description": "<p>Elation specialty name</p>"          },          {            "group": "Success 200 - Physician",            "type": "Object",            "optional": false,            "field": "specialties.category",            "description": "<p>Category info for the physician</p>"          },          {            "group": "Success 200 - Physician",            "type": "Number",            "optional": false,            "field": "specialties.category.id",            "description": "<p>Elation category ID</p>"          },          {            "group": "Success 200 - Physician",            "type": "String",            "optional": false,            "field": "specialties.category.name",            "description": "<p>Elation category name</p>"          },          {            "group": "Success 200 - Physician",            "type": "Object",            "optional": false,            "field": "stats",            "description": "<p>Statistics about this users</p>"          },          {            "group": "Success 200 - Physician",            "type": "Object",            "optional": false,            "field": "stats.letters",            "description": "<p>Physician's usage of letters</p>"          },          {            "group": "Success 200 - Physician",            "type": "Number",            "optional": false,            "field": "stats.letters.sent",            "description": "<p>Number of letters sent</p>"          },          {            "group": "Success 200 - Physician",            "type": "Number",            "optional": false,            "field": "stats.letters.received",            "description": "<p>Number of letters received</p>"          },          {            "group": "Success 200 - Physician",            "type": "Datetime",            "optional": false,            "field": "stats.letters.last",            "description": "<p>Date/time last letter was sent or received by the physician</p>"          },          {            "group": "Success 200 - Physician",            "type": "Object",            "optional": false,            "field": "stats.comments",            "description": "<p>Physician's usage of comments on letters</p>"          },          {            "group": "Success 200 - Physician",            "type": "Number",            "optional": false,            "field": "stats.comments.wrote",            "description": "<p>Number of comments the physician has written</p>"          },          {            "group": "Success 200 - Physician",            "type": "Datetime",            "optional": false,            "field": "stats.comments.last",            "description": "<p>Datetime last comment was written by the physician</p>"          },          {            "group": "Success 200 - Physician",            "type": "Object",            "optional": false,            "field": "stats.connections",            "description": "<p>Physician's connections within Elation network</p>"          },          {            "group": "Success 200 - Physician",            "type": "Number",            "optional": false,            "field": "stats.connections.total",            "description": "<p>Total of connections</p>"          },          {            "group": "Success 200 - Physician",            "type": "Number",            "optional": false,            "field": "stats.connections.emr_users",            "description": "<p>Total of connections with Elation's users</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  \"npi\": 1000001,\n  \"first_name\": \"Dennis\",\n  \"last_name\": \"Fong\",\n  \"credentials\": \"MD\",\n  \"app_type\": \"emr\",\n  \"contact_type\": \"physician\",\n  \"specialties\": {\n    \"specialty\" : {\n      \"id\": 1,\n      \"name\": \"family medicine\"\n    },\n    \"category\": {\n      \"id\": 12345,\n      \"name\": \"internal medicine\"\n    }\n  },\n \"practices\": [{\n    \"name\": \"Dennis Fong M.D\",\n    \"locations\": [{\n      \"city\": \"Walnut Creek\",\n      \"zip\": \"94598\",\n      \"lon\": -122.0433385,\n      \"state\": \"CA\",\n      \"address\": \"106 La Casa Via\",\n      \"lat\": 37.9121849,\n      \"suite\": \"Ste. 110\"\n    }, {...}]\n  }, {...}], \n  \"stats\": {\n    \"connections\": {\n      \"total\": 2, \n      \"emr_users\": 2\n    }, \n    \"letters\": {\n      \"sent\": 0,\n      \"received\": 1, \n      \"last\": \"2013-10-23T21:24:53\"\n    }, \n    \"comments\": {\n      \"wrote\": 0,\n      \"last\": \"2013-10-24T09:36:21\"\n    }\n  },\n  stats_relation\": {\n    \"letters\": {\n      \"sent\": 0,\n      \"received\": 1, \n      \"last\": \"2013-10-23T21:24:53\"\n    },\n    \"comments\": {\n      \"wrote\": 0,\n      \"last\": \"\"\n    }\n    \"shared_patients\": 20,\n    \"mutual_connections\": 0,\n  }\n}",          "type": "json"        }      ]    }  }] });
