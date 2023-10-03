const express = require("express");
const WatchModel = require("../db/db");
const router = express.Router();


router.get('/', async (req, res) => {
    try {
        const data = await WatchModel.find({});
        console.log(data);
        res.status(200).send(data);
    } catch (error) {
        res.status(401).send('There is One error ');
    }
});

module.exports = router


