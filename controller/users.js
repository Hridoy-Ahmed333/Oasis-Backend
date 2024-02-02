const fs = require("fs");
// const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
// const items = data.users;

const mongoose = require("mongoose");
const model = require("../model/users");
const User = model.User;

exports.create = async (req, res) => {
  const user = new User(req.body);
  try {
    const output = await user.save();
    console.log(output);
    res.status(201).json(output);
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
};

exports.getAll = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

exports.getOne = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

exports.replace = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findOneAndReplace({ _id: id }, req.body, {
      new: true,
    });
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

exports.update = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

exports.deleteOne = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findOneAndDelete({ _id: id });
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};
