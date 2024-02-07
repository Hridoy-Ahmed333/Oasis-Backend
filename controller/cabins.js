const fs = require("fs");
const multer = require("multer");
const upload = multer();
// const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
// const items = data.cabins;

const mongoose = require("mongoose");
const model = require("../model/cabin");
const Cabin = model.Cabin;

exports.create = async (req, res) => {
  //console.log("Create req is:", req.body, req.file);
  try {
    if (!req.file) {
      res.json({
        success: false,
        message: "No file was provided",
      });
    } else {
      let cabin = new Cabin({
        ...req.body,
        image: req.file.filename,
      });
      const savedCabin = await cabin.save();
      res.json({
        success: true,
        message: "Cabin added successfully",
        cabin: savedCabin,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

// exports.create = async (req, res) => {
//   const cabin = new Cabin(req.body);
//   //setting.created_at = Date.now();
//   try {
//     const output = await cabin.save();
//     console.log(output);
//     res.status(201).json(output);
//   } catch (error) {
//     //console.error(error);
//     const errorMessage = error.message;
//     console.log(errorMessage);
//     res.status(400).send(error);
//   }
// };

exports.getAll = async (req, res) => {
  try {
    const cabins = await Cabin.find();
    res.json(cabins);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

exports.getOne = async (req, res) => {
  const id = req.params.id;
  try {
    const cabin = await Cabin.findById(id);
    res.json(cabin);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

exports.replace = async (req, res) => {
  const id = req.params.id;
  try {
    const cabin = await Cabin.findOneAndReplace({ _id: id }, req.body, {
      new: true,
    });
    res.json(cabin);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

exports.update = async (req, res) => {
  console.log("Update Req is:", req.body, req.file);
  const id = req.params.id;

  if (req.file) {
    const cabin = await Cabin.findOneAndUpdate(
      { _id: id },
      { ...req.body, image: req.file.filename },
      {
        new: true,
      }
    );
    res.json(cabin);
  } else {
    const cabin = await Cabin.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.json(cabin);
  }
};

// exports.update = async (req, res) => {
//   upload.array("images"); // Specify the field names if different from 'images'

//   console.log("The Req is:", req.body);
//   const id = req.params.id;
//   try {
//     const cabin = await Cabin.findOneAndUpdate({ _id: id }, req.body, {
//       new: true,
//     });
//     res.json(cabin);
//   } catch (error) {
//     console.log(error);
//     res.status(400).send(error);
//   }
// };

exports.deleteOne = async (req, res) => {
  const id = req.params.id;
  try {
    const cabin = await Cabin.findOneAndDelete({ _id: id });
    res.json(cabin);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};
