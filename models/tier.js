const mongoose = require('mongoose');

const tierSchema = new mongoose.Schema({
    name: {
        type    : String,
        unique  : true,
        required: true,
    },
    image_url: {
        type: String,
    },
    duo_tiers: [{
        type: String,
    }]
});

const Tier = mongoose.model("Tier",tierSchema);

module.exports = Tier;