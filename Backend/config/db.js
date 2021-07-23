const mongoose = require("mongoose");
const env = require("dotenv");
env.config();

const connect = () => {
    return mongoose.connect("mongodb://127.0.0.1:27017/testing", {
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology:true
    })
}

module.exports = connect;