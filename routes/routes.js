const express = require("express");
const WatchModel = require("../db/db");
const UserModel = require("../db/userShema");
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const data = await WatchModel.find({});
        res.status(200).send(data);
    } catch (error) {
        res.status(401).send('There is One error ');
    }
});

router.post('/api', async (req, res) => {
    try {
        const { name, email, number } = req.body;
        const data = UserModel({ name, email, number });
        await data.save();
        res.status(201).send('data submit');
    } catch (error) {
        res.status(401).send('There is One error ');
    }
});

module.exports = router


