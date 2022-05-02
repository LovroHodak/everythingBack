const TestUser = require("./models/testUser.model")
require("./config/db.config")

TestUser.insertMany([
    {name: 'Lovro'},
    {name: 'Klemen'},
    {name: 'Miha'}
]).then(() => {
    console.log("TestUsers added");
    process.exit();
  })
  .catch((err) => {
    console.log("Problems with adding TestUser: ", err);
  });