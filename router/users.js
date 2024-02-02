const express = require("express");
const userController = require("../controller/users");
const usersRouter = express.Router();

usersRouter
  .post("/", userController.create)
  .get("/", userController.getAll)
  .get("/:id", userController.getOne)
  .put("/:id", userController.replace)
  .patch("/:id", userController.update)
  .delete("/:id", userController.deleteOne);

exports.usersRouter = usersRouter;

//C:/Users/USER/Desktop/ProjectBackend/Images
