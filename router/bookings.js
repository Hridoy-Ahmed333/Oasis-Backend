//bookings
const express = require("express");
const bookingsController = require("../controller/bookings");
const bookingsRouter = express.Router();

bookingsRouter
  .post("/", bookingsController.create)
  .get("/", bookingsController.getAll)
  .get("/:id", bookingsController.getOne)
  .put("/:id", bookingsController.replace)
  .patch("/:id", bookingsController.update)
  .delete("/:id", bookingsController.deleteOne);

exports.bookingsRouter = bookingsRouter;
