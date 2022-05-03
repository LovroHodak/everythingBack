const mongoose = require("mongoose");

const testUserSchema = mongoose.Schema({
    name: {
        type: String,
    }
})

const TestUser = mongoose.model("testUsers", testUserSchema)

module.exports = TestUser;