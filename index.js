// const express = require("express");
// const morgan = require("morgan");
// const server = express();

// const cabinsRouter = require("./router/cabins");

// server.use(express.json());
// server.use(morgan("combined"));
// server.use("/cabins", cabinsRouter.cabinsRouter);

// server.listen(5050, () => {
//   console.log("Server started at Port 5050");
// });
//bookingsRouter

const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors"); // Import the cors package
const server = express();

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/Hotel");
  console.log("Connected with database");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const cabinsRouter = require("./router/cabins");
const usersRouter = require("./router/users");
const settingsRouter = require("./router/settings");
const bookingsRouter = require("./router/bookings");

server.use(cors()); // Use cors middleware
server.use(express.json());
server.use(morgan("combined"));
server.use("/cabins", cabinsRouter.cabinsRouter);
server.use("/users", usersRouter.usersRouter);
server.use("/settings", settingsRouter.settingsRouter);
server.use("/bookings", bookingsRouter.bookingsRouter);

server.listen(5050, () => {
  console.log("Server started at Port 5050");
});

//Time cate conversion
// const dateObj = new Date();
// console.log(dateObj);
// const dateStr = dateObj.toString();
// console.log(dateStr);
// const newDate = new Date(dateStr);
// console.log(newDate);
