const express = require("express");
const cabinController = require("../controller/cabins");
const cabinsRouter = express.Router();
const multer = require("multer");
const path = require("path");
//const img = require("../Images");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // cb(null, "../Images");
    cb(null, "C:/Users/USER/Desktop/ProjectBackend/Images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
    const fileName = Date.now() + path.extname(file.originalname);
  },
});

const upload = multer({ storage: storage });

exports.upload = upload;

cabinsRouter
  .post("/", upload.single("image"), cabinController.create)
  .get("/", cabinController.getAll)
  .get("/:id", cabinController.getOne)
  .put("/:id", cabinController.replace)
  .patch("/:id", cabinController.update)
  .delete("/:id", cabinController.deleteOne);

exports.cabinsRouter = cabinsRouter;

//C:/Users/USER/Desktop/ProjectBackend/Images
