const express = require("express");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const createToken = (user) => {
    return jwt.sign({user},process.env.JWT_SECRET_KEY)
}

const register = async(req,res) => {
    const user = await User.findOne({ email: req.body.email }).exec();
    if (user) return res.status(400).send({ status: "failed", message: "User already exist" });
    user = User.create(req.body);
    const token = createToken(req.body);
    return res.status(200).json({ user: user, token: token });
}

const login = async (req, res) => {
    const user = await User.findOne({ email: req.body.email }).exec();
    if (!user) return res.status(400).send({ status: "failed", message: "user does not exist" });
    const match = user.matchPassword(req.body.password);
    if (!match) return res.status(400).send({ status: "failed", message: "please enter correct email and password" });
    let token = createToken(user);
    return res.status(200).json({ user: user, token: token })
}

module.exports = { register, login };