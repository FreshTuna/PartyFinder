const mongoose = require("mongoose");

const rollSchema = new mongoose.Schema({
    name: {
        type:String
    }
});

const Roll = mongoose.model("Roll", rollSchema);

module.exports = Roll;