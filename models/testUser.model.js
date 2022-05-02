const mongoose = require("mongoose");

const testUserSchema = mongoose.Schema({
    name: {
        type: String,
    }
})

const TestUser = mongoose.model("about", testUserSchema)

module.exports = TestUser;