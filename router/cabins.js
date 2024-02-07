const express = require("express");
const cabinController = require("../controller/cabins");
const cabinsRouter = express.Router();
const multer = require("multer");
const path = require("path");

//const img = require("../Images");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // cb(null, "../Images");
    cb(
      null,
      "C:/Users/USER/Desktop/React/Practicum project frontend/src/data/images"
    );
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
    const fileName = Date.now() + path.extname(file.originalname);
  },
});

const upload = multer({ storage: storage });

const multerErrorHandler = (err, req, res, next) => {
  console.log("Req Body is: ", req.body, "Req File is", req.file);
  if (err instanceof multer.MulterError) {
    // A Multer error occurred when uploading.
    console.error(err);
    res.status(500).send(err);
  } else if (err) {
    // An unknown error occurred when uploading.
    console.error(err);
    res.status(500).send(err);
  }
  // Everything went fine.
  next();
};

exports.upload = upload;

cabinsRouter
  .post("/", upload.single("image"), cabinController.create)
  //.post("/", cabinController.create)
  .get("/", cabinController.getAll)
  .get("/:id", cabinController.getOne)
  .put(
    "/:id",
    upload.single("image"),
    multerErrorHandler,
    cabinController.replace
  )
  //.patch("/:id", cabinController.update)
  .patch(
    "/:id",
    upload.single("image"),
    multerErrorHandler,
    cabinController.update
  )
  .delete("/:id", cabinController.deleteOne);

exports.cabinsRouter = cabinsRouter;

//C:/Users/USER/Desktop/ProjectBackend/Images
//C:/Users/USER/Desktop/React/the-wild-oasis/src/data/images
