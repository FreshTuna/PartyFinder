const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    title: {
        type: String
    },
    tier: {
        type: mongoose.Schema.Types.ObjectId,
        ref : "Tier"
    },
    roll: [{
        type: mongoose.Schema.Types.ObjectId,
        ref : "Roll"
    }],
    capacity: {
        type: Number
    }
}, {
    timestamps: true
});

const Room = mongoose.model("Room", roomSchema);

module.exports = Room;