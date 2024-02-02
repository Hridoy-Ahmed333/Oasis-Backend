const mongoose = require("mongoose");
const { Schema } = mongoose;
const cabinSchema = new Schema({
  name: { type: String, required: true, unique: true },
  maxCapacity: {
    type: Number,
    min: [0, "wrong min discount"],
    max: [100, "wrong max discount"],
  },
  regularPrice: { type: Number, required: true },
  discount: {
    type: Number,
    min: [0, "wrong min discount"],
    max: [100, "wrong max discount"],
  },
  description: String,
  image: { type: String, required: true },
});

exports.Cabin = mongoose.model("Cabin", cabinSchema);
