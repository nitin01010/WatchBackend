const mongoose = require("mongoose");

const UserShema = new mongoose.Schema({
    name: String,
    email: String,
    number: Number
});

const UserModel = mongoose.model('User', UserShema);

module.exports = UserModel;