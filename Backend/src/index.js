const express = require("express");
const app = express();

const userController = require("../controller/user.controller");
const carController = require("../controller/car.controller")
const { register, login } = require("../controller/auth.controller");

app.use(express.json());

app.use("/users", userController);
app.use("/cars", carController);
app.post("/users/register", register);
app.post("/users/login", login);
module.exports = app;
