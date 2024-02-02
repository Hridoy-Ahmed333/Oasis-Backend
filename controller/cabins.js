const fs = require("fs");
// const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
// const items = data.cabins;

const mongoose = require("mongoose");
const model = require("../model/cabin");
const Cabin = model.Cabin;

exports.create = async (req, res) => {
  try {
    if (!req.file) {
      res.json({
        success: false,
        message: "No file was provided",
      });
    } else {
      let cabin = new Cabin({
        ...req.body,
        image:
          "C:/Users/USER/Desktop/ProjectBackend/Images/" + req.file.filename,
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
  const id = req.params.id;
  try {
    const cabin = await Cabin.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.json(cabin);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

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
