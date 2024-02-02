const fs = require("fs");
// const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
// const items = data.settings;

const mongoose = require("mongoose");
const model2 = require("../model/cabin");
const model3 = require("../model/users");
const model = require("../model/bookings");

const Cabin = model2.Cabin;
const User = model3.User;
const Booking = model.Booking;

exports.create = async (req, res) => {
  const booking = new Booking(req.body);
  try {
    const output = await booking.save();
    console.log(output);
    res.status(201).json(output);
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
};

exports.getAll = async (req, res) => {
  try {
    const bookings = await Booking.find();
    // console.log(bookings);
    const allBookings = await Promise.all(
      bookings.map(async (item) => {
        const cabin = await Cabin.findById(item.cabinId);

        const guest = await User.findById(item.guestsId);

        const allBookings = { item, cabin, guest };

        console.log("cabins and guests are: ", allBookings);
        return allBookings;
        //return { ...item, cabinId: { ...cabin }, guestsId: { ...guest } };
      })
    );

    res.json(allBookings);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

exports.getOne = async (req, res) => {
  const id = req.params.id;
  try {
    const booking = await Booking.findById(id);
    const cabin = await Cabin.findById(booking.cabinId);
    const guest = await User.findById(booking.guestsId);
    const wholeBooking = { booking, cabin, guest };
    res.json(wholeBooking);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

exports.replace = async (req, res) => {
  const id = req.params.id;
  try {
    const booking = await Booking.findOneAndReplace({ _id: id }, req.body, {
      new: true,
    });
    res.json(booking);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

exports.update = async (req, res) => {
  const id = req.params.id;
  try {
    const booking = await Booking.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.json(booking);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

exports.deleteOne = async (req, res) => {
  const id = req.params.id;
  try {
    const booking = await Booking.findOneAndDelete({ _id: id });
    res.json(booking);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};
