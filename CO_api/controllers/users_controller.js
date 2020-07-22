const express = require("express");
const users = express.Router();
const User = require("../models/users");

users.get("/", (req, res) => {
  res.send("Login/Sign up");
});

module.exports = users;
