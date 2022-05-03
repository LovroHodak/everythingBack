const express = require("express");
const router = express.Router();

const TestUser = require("../models/testUser.model");

router.get("/testusers", /* async */ (req, res) => {
  /*  try{
        const testUsers = await TestUser.find()
        res.status(200).json(testUsers)
        console.log(testUsers)
    } catch (e) {
        console.error(error)
        res.status(500).json({
            message: 'Server Error.'
        })
    } */

  TestUser.find()
    .then((testUsers) => {
      res.status(200).json(testUsers);
      console.log(testUsers);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({
        message: "Server Error",
      });
    });
});

module.exports = router;
