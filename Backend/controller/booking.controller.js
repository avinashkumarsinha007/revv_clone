const mongoose = require("mongoose");

const Booking = require("../models/booking.model");

const router = express.Router();

router.get("/", async (req, res) => { 
    try
    {
        const booking = await Booking.find().lean().exec();
        res.status(200).json({ booking: booking });
    }
    catch
    {
        res.status(400).json({ message:"Bad request"});
    }
});

router.post("/", async (req, res) => {
    try
    {
        const booking = await Booking.create(req.body);
        res.status(200).json({ booking: booking });
    }
    catch
    {
        res.status(400).json({ message:"Bad request"});
    }
});