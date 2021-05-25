const mongoose = require("mongoose");

const User = mongoose.model(
    "User",
    new mongoose.Schema({
        username: String,
        email: String,
        password: String,
        role: [
            {
                type: mongoose.Schema.Types.ObjectId,
                refL "Role"
            }
        ]
    })
);

module.exports = User;
