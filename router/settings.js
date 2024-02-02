const express = require("express");
const settingController = require("../controller/settings");
const settingsRouter = express.Router();

settingsRouter
  .post("/", settingController.create)
  .get("/", settingController.getAll)
  .get("/:id", settingController.getOne)
  .put("/:id", settingController.replace)
  .patch("/:id", settingController.update)
  .delete("/:id", settingController.deleteOne);

exports.settingsRouter = settingsRouter;
