var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/portal';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  insertDocuments(db, function() {
    findDocuments(db, function() {
      db.close();
    });
  });
});

var insertDocuments = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('resources');
  // Insert some documents
  collection.insertMany(
    [{
  program: "Calculus, Chemistry, and Physics Undergraduate Tutoring Room",
  location: "Tech HG04",
  days: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday"
  ],
  hours: [
    "8:00PM-10:00PM"
  ],
  classes: [
    "Math 212",
    "Math 213",
    "Math 214",
    "Math 220",
    "Math 224",
    "Math 230",
    "Math 234",
    "Math 240",
    "Math 250",
    "Chem 101",
    "Chem 102",
    "Chem 103",
    "Chem 171",
    "Chem 172",
    "Physics 130-1",
    "Physics 130-2",
    "Physics 130-3",
    "Physics 135-1",
    "Physics 135-2",
    "Physics 135-3"
  ],
  contact: "",
  commitment: "Drop-in",
  link: "http://www.math.northwestern.edu/undergraduate/tutoring.html"
},
{
  program: "Tech Tutoring,",
  location: "MG28",
  days: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday"
  ],
  hours: [
    "2:00PM-5:00PM",
    "7:00PM-10:00PM"
  ],
  classes: [
    "Math",
    "Chem",
    "Physics",
    "EA",
    "Thermodynamics",
    "Mechanics"
  ],
  contact: "ueoffice@northwestern.edu",
  commitment: "Drop-in",
  link: ""
},
{
  program: "Academic Mentoring Program (AMP)",
  location: "",
  days: "",
  hours: "",
  classes: [
    "Bio 215",
    "Bio 217",
    "Bio 219",
    "Chem 101",
    "Chem 102",
    "Chem 103",
    "Econ 201",
    "Econ 202",
    "Stat 210",
    "Econ 310-1"
  ],
  contact: "jamila.anderson@northwestern.edu",
  commitment: "Quarter-long",
  link: "http://www.northwestern.edu/searle/programs-events/undergrad/group-study/academic-mentoring-program/index.html"
},
{
  program: "Gateway Science Workshop (GSW)",
  location: "",
  days: "",
  hours: "",
  classes: [
    "Bio 215",
    "Bio 217",
    "Bio 219",
    "Bio 308",
    "Chem 101",
    "Chem 102",
    "Chem 103",
    "Chem 210-1",
    "Chem 210-2",
    "Chem 210-3",
    "EA1",
    "EA2",
    "EA3",
    "EA4 Math 212",
    "Math 213",
    "Math 214",
    "Math 220",
    "Math 224",
    "Math 230",
    "Physics 130-1",
    "Physics 130-2",
    "Physics 130-3",
    "Physics 135-1",
    "Physics 135-2",
    "Physics 135-3",
    "Econ 201",
    "Econ 202",
    "Stat 210"
  ],
  contact: "jamie.hoversen@northwestern.edu",
  commitment: "Quarter-long",
  link: "http://www.northwestern.edu/searle/programs-events/undergrad/group-study/gsw/index.html"
},
{
  program: "Math Place",
  location: "Room 232, Schaffner Library, Wieboldt Hall",
  days: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Saturday",
    "Sunday"
  ],
  hours: "",
  classes: "",
  contact: "scsmathplace@northwestern.edu",
  commitment: "Appointment",
  link: "http://www.library.northwestern.edu/libraries-collections/schaffner-library/math-place.html"

  }], function(err, result) {
    assert.equal(err, null);
    assert.equal(5, result.result.n);
    assert.equal(5, result.ops.length);
    console.log("Inserted 5 documents into the collection");
    callback(result);
  });
}

var findDocuments = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('resources');
  // Find some documents
  collection.find({'program': "Math Place"}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
    callback(docs);
  });
}
