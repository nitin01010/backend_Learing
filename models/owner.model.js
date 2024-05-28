const mongoose = require("mongoose");

const ownerShema = mongoose.Schema({
    fullname: {
        type: String,
        minLength: 3,
        trim: true
    },
    email: String,
    password: String,
    isadmin: Boolean,
    product: {
        type: Array,
        default: []
    },
});

module.exports = mongoose.model("owner", ownerShema);
