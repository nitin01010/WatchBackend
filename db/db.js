const mongoose = require("mongoose");
const url = process.env.DB_URL

const Main = async () => {
    try {
        await mongoose.connect(url);
        console.log('mongodb is connect');
    } catch (error) {
        console.log('there is one error');
    }
}

Main();


const UserShema = new mongoose.Schema({
    img: String,
    name: String,
    priceUSD: Number,
    title: String,
    description: String
});

const WatchModel = mongoose.model('watchs', UserShema);

module.exports = WatchModel;