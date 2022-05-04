const express = require("express");
const router = express.Router();

const TestUser = require("../models/testUser.model");

router.get("/testusers", async (req, res) => {
  try {
    const testUsers = await TestUser.find();
    res.status(200).json(testUsers);
    console.log(testUsers);
  } catch (e) {
    console.error(error);
    res.status(500).json({
      message: "Server Error.",
    });
  }
});

router.post("/addTestUser", async (req, res) => {
  try {
    const { text } = req.body;
    const awaitedTestUser = await TestUser.create({ name: text });
    res.status(200).json(awaitedTestUser);
  } catch (e) {
    console.error(e);
  }
});

/* router.post("/addTestUser", (req, res) => {
  const { text } = req.body;
  TestUser.create({ name: text })
    .then((response) => {
      res.status(200).json(response);
      console.log(response);
    })
    .catch((err) => {
      res.status(500).json({
        error: "Something went wrong",
        message: err,
      });
    });
}); */

/* router.get("/testusers", (req, res) => {
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
}); */

module.exports = router;
