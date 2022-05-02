npm init -y
npm i express mongoose dotenv

1. index.js
require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}, dirname ${__dirname}`)
);

2. .env
PORT=5000
MONGO_URI=

3. .gitignore
node_modules
.env

NODE INDEX.js -> server should be running

1. db.config.js
require("dotenv").config();
const mongoose = require("mongoose");

module.exports = mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB panfu connected");
  })
  .catch((err) => {
    console.log("Error: ", err);
  });


MONGODB ATLAS
-levo zgoraj folder icon - new project
-create project
-build a database - free - aws - frankfurt
-cluster name: 'some name' - create cluster
-username & password (you will need this later for MONGO_URI) - create user
-my local environment
-add my current ip address - finish and close

-Network access
actions: edit - allow access from everywhere

-Database - connect - connect your application - copy mongo uri

2. MONGO_URI=mongodb+srv://Lovro:Lovro@all.kl3ct.mongodb.net/Lovro?retryWrites=true&w=majority (paste that URI and change password and name)


3. models folder - create model
const mongoose = require("mongoose");
const testUserSchema = mongoose.Schema({
    name: {
        type: String,
    }
})
const TestUser = mongoose.model("about", testUserSchema)
module.exports = TestUser;

4. seedTestUser.js
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

  5. node seedTestUser.js - check DB - everything should work


  git init
  git add .
