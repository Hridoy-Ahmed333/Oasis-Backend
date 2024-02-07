const express = require("express");
const authController = require("../controller/auth");
const authRouter = express.Router();

authRouter
  .post("/signup", authController.createUser)
  .post("/login", authController.login);

exports.authRouter = authRouter;
