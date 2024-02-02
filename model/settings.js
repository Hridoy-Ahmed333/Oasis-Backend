const mongoose = require("mongoose");
const { Schema } = mongoose;
const settingsSchema = new Schema({
  minBookingLength: { type: Number, required: true },
  maxBookingLength: { type: Number, required: true },
  maxGuestsForBookings: { type: Number, required: true },
  breakfastPrice: { type: Number, required: true },
});

exports.Setting = mongoose.model("Setting", settingsSchema);
