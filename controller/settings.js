const fs = require("fs");
// const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
// const items = data.settings;

const mongoose = require("mongoose");
const model = require("../model/settings");
const Setting = model.Setting;

exports.create = async (req, res) => {
  const setting = new Setting(req.body);
  try {
    const output = await setting.save();
    console.log(output);
    res.status(201).json(output);
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
};

exports.getAll = async (req, res) => {
  try {
    const settings = await Setting.find();
    res.json(settings);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

exports.getOne = async (req, res) => {
  const id = req.params.id;
  try {
    const setting = await Setting.findById(id);
    res.json(setting);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

exports.replace = async (req, res) => {
  const id = req.params.id;
  try {
    const setting = await Setting.findOneAndReplace({ _id: id }, req.body, {
      new: true,
    });
    res.json(setting);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

exports.update = async (req, res) => {
  const id = req.params.id;
  try {
    const setting = await Setting.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.json(setting);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

exports.deleteOne = async (req, res) => {
  const id = req.params.id;
  try {
    const setting = await Setting.findOneAndDelete({ _id: id });
    res.json(setting);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};
