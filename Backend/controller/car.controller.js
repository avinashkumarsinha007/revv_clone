const express = require("express");
const Car = require("../models/Car.model");

const router = express.Router();

// use http://localhost:4000/cars?city=Delhi-NCR to filter by city name
//

router.get("/", async (req, res) => {
    const data = req.query.city;
    const obj = data == !undefined ? { location: `${data}` } : {};
    try
    {
        const car = await Car.find(obj).lean().exec();
        res.status(200).json({ car: car });
    }
    catch
    {
        res.status(400).json({ message:"Bad request"});
    }
});

router.get("/:id", async (req, res) => {
    try
    {
        const car = await Car.findById(req.params.id).lean().exec();
        res.status(200).json({ car: car });
    }
    catch
    {
        res.status(400).json({ message:"Bad request"});
    }
});

router.patch("/:id", async (req, res) => {
    try
    {
        const car = await Car.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(201).json({ car: car });
    }
    catch
    {
        res.status(400).json({ message:"Bad request"});
    }
});

router.delete("/:id", async (req, res) => {
    try
    {
        const car = await Car.findByIdAndDelete(req.params.id)
        res.status(201).json({ car: car });
    }
    catch
    {
        res.status(400).json({ message:"Bad request"});
    }
});


module.exports = router;
