const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type    : String,
        unique  : true,
        required: true,
    },
    icon: {
        type: String,
    },
    tier_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref : "Tier"
    }
}, {
    timestamps: true
});

const User = mongoose.model("User",userSchema);

module.exports = User;