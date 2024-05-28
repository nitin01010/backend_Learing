const mongoose = require("mongoose");


const userShema = mongoose.Schema({
    fullname: String,
    email: String,
    password: String,
    cart: {
        type: Array,
        default: []
    },
    isadmin: Boolean,
    order: {
        type: Array,
        default: []
    },
    contact: Number,
});

module.exports = mongoose.model("user", userShema);
