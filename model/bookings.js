const mongoose = require("mongoose");
const { Schema } = mongoose;
const bookingsSchema = new Schema({
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  created_at: { type: Date, required: true },
  numNights: Number,
  numOfGuests: Number,
  price: Number,
  cabinPrice: Number,
  extraPrice: Number,
  totalPrice: Number,
  status: String,
  hasBreakfast: { type: Boolean, required: true },
  isPaid: { type: Boolean, required: true },
  observation: String,
  cabinId: { type: String, required: true },
  guestsId: { type: String, required: true },
});

exports.Booking = mongoose.model("Booking", bookingsSchema);
