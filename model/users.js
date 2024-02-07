const mongoose = require("mongoose");
const { Schema } = mongoose;
const usersSchema = new Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true },
  nationality: { type: String, required: true },
  countryFlag: { type: String, required: true },
  nationalId: { type: String, required: true },
  created_at: { type: Date, required: true },
});

exports.User = mongoose.model("User", usersSchema);
